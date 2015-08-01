app.controller('posts', function($scope, $http, $location, api, $rootScope){
	var alias = $location.path().substr(1);
	$scope.getPosts = function(){
		api.Posts.query({alias: alias}, function success(posts){
			var postsCount = posts.length;

			if(postsCount == 0){
				$scope.postsEmpty = true;
			} else {
				$scope.postsEmpty = false;
				$scope.posts = posts;

				if(postsCount >= 15){
					// Load 15 more posts.
					$scope.loadMoreStatus = true;
				}
			}
		});

		var offset = 15; //
		$scope.loadMore = function(){
			console.log(offset);
			console.log($scope.posts);
			api.Posts.query({alias: alias, offset: offset}, function(posts){

				if(posts.length == 0){
					$scope.loadMoreStatus = false;
					$scope.thatsAll = true;
				} else {
					posts.forEach(function(post, i){
						$scope.posts.push(post);
					});
				}
			});
			offset += 15;
		}
	}

	$scope.newPost = {};
	$scope.post = function(){
		$scope.newPost.created_by = alias;

		api.Posts.save($scope.newPost, function(res){
			console.log(res);
			if(res.status == 1){
				$scope.newPost.text = "";
				$scope.getPosts();
			}
			$scope.postStatus = res.message;
		});
	}

	// Remove any post from your wall.
	$scope.remove = function(_id){
		api.Posts.remove({}, {'id': _id}, function success(posts){
			$scope.getPosts();
		});
	}
	// Smiles by themselves!
	$scope.emoji = {
		1:  {title: ':-)', source: "D83DDE0A"}, //0
		2:  {title: ':-D', source: "D83DDE03"}, //1
		3:  {title: ';-)', source: "D83DDE09"}, //2
		4:  {title: 'xD',  source: "D83DDE06"}, //3
		5:  {title: ';-P', source: "D83DDE1C"}, //4
		6:  {title: ':-p', source: "D83DDE0B"}, //5
		7:  {title: '8-)', source: "D83DDE0D"}, //6
		8:  {title: 'B-)', source: "D83DDE0E"}, //7
		9:  {title: ':-(', source: "D83DDE12"}, //8
		10: {title: ';-]', source: "D83DDE0F"}, //9
		11: {title: '3(',  source: "D83DDE14"},
		12: {title: ":'(", source: "D83DDE22"},
		13: {title: ':_(', source: "D83DDE2D"},
		14: {title: ':((', source: "D83DDE29"},
		15: {title: ':o',  source: "D83DDE28"},
		16: {title: ':|',  source: "D83DDE10"},
		17: {title: '3-)',  source: "D83DDE0C"},
		18: {title: 'O:)',  source: "D83DDE07"},
		19: {title: '8|',  source: "D83DDE33"},
		20: {title: '<3',  source: "2764"},
		21: {title: ':<3',  source: "D83DDE18"},
		22: {title: ':))',  source: "D83DDE02"},
		23: {title: ';o',  source: "D83DDE30"},
		24: {title: ':-]',  source: "263A"},
		25: {title: '}:)',  source: "D83DDE08"},
		26: {title: ':like:',  source: "D83DDC4D"},
		27: {title: ':dislike:',  source: "D83DDC4E"},
		28: {title: ':applouse:',  source: "D83DDC4F"},
		29: {title: ':shit:',  source: "D83DDCA9"},
		30: {title: ':kappa:', source: "kappa"},
		31: {title: ':moon:', source: "D83CDF1D"}
	}
	String.prototype.replaceAll = function(search, replace){
	  return this.split(search).join(replace);
	}
	$scope.toPost = function(smile){
		if(!$scope.newPost.text){
			$scope.newPost.text = smile.title;
		} else {
			$scope.newPost.text += " " + smile.title;
		}
		
	}


	$scope.getRandomPost = function(){
		$http.get('/api/posts/random').success(function(post){
			// console.log(post);
			$scope.post = post;
		});
	}
	$scope.feed = function(){
		var id = $rootScope.me._id;
		api.Feed.query({user_id: id}, function success(posts){
			if(posts.length == 0){
				$scope.postsEmpty = true;
			} else {
				$scope.postsEmpty = false;
				$scope.posts = posts;
			}
		});
	}
});

app.controller('moderation', function($scope, $http, $rootScope, api, $mdToast){
	function getModeration(){
		api.Posts.query({type: 'moderation'}, function(posts){
			if(posts.length == 0){
				$scope.noPosts = true;
			} else {
				$scope.posts = posts;
			}
		});
	}
	getModeration();
	
	// Accept post with status 2.
	$scope.accept = function(_id){
		api.Moderation.save({}, {'id': _id, 'action': 'accept'}, function(resp){
			var status = resp.status;
			var message = resp.message;

			showToast(message);

			setTimeout(getModeration(), 1000);
		});
	}
	$scope.removeModeration = function(_id){
		api.Posts.remove({}, {'id': _id}, function success(posts){
			console.log(posts);
			showToast("Эта запись была удалена.");
			getModeration();
		});
	}
	showToast = function(text) {
		$mdToast.show({
			position: "bottom left",
			template: "<md-toast>"+ text +"</md-toast>"
		});
	}
});


app.controller('feed', function($scope, $http, api, $rootScope, $timeout){
	$timeout(function(){
		api.Feed.get({}, function(posts){
			console.log(posts);
			if(posts.length == 0 || !posts || posts.status == 0){
				$scope.postsEmpty = true;
			} else {
				$scope.postsEmpty = false;
				$scope.posts = posts.posts;
			}
		});
	}, 500);
	
});
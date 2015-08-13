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
				console.log(posts);

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
	var text = document.getElementById("postForm");


	$scope.post = function(){
		$scope.newPost.created_by = alias;

		
		console.log(text.innerHTML);
		$scope.newPost.text = text.innerHTML;

		api.Posts.save($scope.newPost, function(res){
			console.log(res);
			if(res.status == 1){
				$scope.newPost.text = "";
				$scope.getPosts();
			}
			$scope.postStatus = res.message;
			$scope.user.stats.posts += 1;
		});
	}

	// Remove any post from your wall.
	$scope.remove = function(_id){
		api.Posts.remove({}, {'id': _id}, function success(posts){
			$scope.getPosts();
			$scope.user.stats.posts -= 1;
		});
	}
	// Smiles by themselves!
	$scope.emoji = {
		1:  {title: ':-)', source: "D83DDE0A"},
		2:  {title: ':-D', source: "D83DDE03"},
		3:  {title: ';-)', source: "D83DDE09"},
		4:  {title: 'xD',  source: "D83DDE06"},
		5:  {title: ';-P', source: "D83DDE1C"},
		6:  {title: ':-p', source: "D83DDE0B"},
		7:  {title: '8-)', source: "D83DDE0D"},
		8:  {title: 'B-)', source: "D83DDE0E"},
		9:  {title: ':-(', source: "D83DDE12"},
		10: {title: ';-]', source: "D83DDE0F"},
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
		if(!$scope.textShow){
			$scope.textShow = "<img src='images/emoji/"+ smile.source +".png' width='18'>" + " ";
			$scope.textSend =  smile.title +" ";
		} else {
			$scope.textShow += " " + "<img src='images/emoji/"+ smile.source +".png' width='18'>" + " ";
			$scope.textSend += " "+ smile.title +" ";
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
	$scope.getModeration = function(){
		api.Posts.query({type: 'moderation'}, function(posts){
			if(posts.length == 0){
				$scope.noPosts = true;
				$scope.posts = null;
			} else {
				$scope.posts = posts;
			}
		});
	}
	$scope.getModeration();
	
	// Accept post with status 2.
	$scope.accept = function(_id){
		api.Moderation.save({}, {'id': _id, 'action': 'accept'}, function(resp){
			var message = resp.message;

			$scope.getModeration();
			toast(message);
		});
	}
	$scope.removeModeration = function(_id){
		api.Posts.remove({}, {'id': _id}, function success(posts){
			console.log(posts);
			toast("Эта запись была удалена.");
			getModeration();
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
	}, 100);
	
});
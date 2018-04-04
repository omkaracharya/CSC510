var request = require('request');
var parse = require('parse-link-header');

var token = "token " + process.env.TOKEN;
var owner = process.env.GIT_USERNAME;
var urlRoot = "https://github.ncsu.edu/api/v3"

// console.log("Token:", token);
// console.log("Owner:", owner);

if (process.argv.length < 4) {
	print_usage();
	return;
}

var functionName = process.argv[2];
var repo = process.argv[3];
switch(functionName) {
	case "createRepo":
		if (process.argv.length < 5) {
			console.log("Invalid parameters.. Check the usage:");
			print_usage();
			return;
		}
		var description = process.argv[4];
		createRepo(repo, description);
		break;
	case "editRepo":
		editRepo(owner, repo);
		break;
	case "listBranches":
		listBranches(owner, repo);
		break;
	case "createIssue":
		if (process.argv.length < 6) {
			console.log("Invalid parameters.. Check the usage:");
			print_usage();
			return;
		}
		var issueTitle = process.argv[4];
		var issueDescription = process.argv[5];
		createIssue(owner, repo, issueTitle, issueDescription);
		break;
	case "listReactions":
		if (process.argv.length < 5) {
			console.log("Invalid parameters.. Check the usage:");
			print_usage();
			return;
		}
		var issueNumber = process.argv[4];
		listReactions(owner, repo, issueNumber);
		break;
	case "help":
		print_usage();
		break;
	default:
		console.log("Invalid parameters.. Check the usage:");		
		print_usage();
		break;
}


function print_usage() {
	console.log("Usage:");
	console.log("node script.js createRepo [repo-name] [repo-description]\t\t\tTo create a new repository");
	console.log("node script.js editRepo [repo-name]\t\t\t\t\t\tTo edit an existing repository");
	console.log("node script.js listBranches [repo-name]\t\t\t\t\t\tTo list all the braches for all the repos");
	console.log("node script.js createIssue [repo-name] [issue-name] [issue-description]\t\tTo create a new issue");
	console.log("node script.js listReactions [repo-name] [issue-number]\t\t\t\tTo list all the reactions for an existing issue");
}


// Function to get all the branches for a particular repository
function listBranches(owner, repo) {
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}/branches`,
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	request(options, function (error, response, body) {
		var obj = JSON.parse(body);
		console.log( "Repository: " + repo );
		var numberOfBranches = 0;
		for( var i = 0; i < obj.length; i++ ) {
			var name = obj[i].name;
			console.log( "\t- Branch: " + name );
			numberOfBranches++;
		}
		console.log( "\tNumber of branches =", numberOfBranches);
	});
}


// Function to create a new repository
function createRepo(repo, description) {
	var options = {
		url: urlRoot + '/user/repos',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}, 
		json: {
			"name": repo,
			"description": description,
			"private": false,
			"has_issues": true,
			"has_projects": true
		}
	};

	request(options, function (error, response, body) {	
		var statusCode = response.statusCode;
		console.log( "Status: " + statusCode )
		// Status code 201 stands for successful creation
		if (statusCode === 201) {
			console.log( "Created a new repo: " + repo );
		} else {
			console.log( "Error creating the repo " );
		}
	});
}


// Function to create a new issue
function createIssue(owner, repo, issueTitle, issueDescription) {
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}/issues`,
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}, 
		json: {
			"title": issueTitle,
			"body": issueDescription,
			"assignee": owner,
			"labels": ["bug"]
		}
	};

	request(options, function (error, response, body) {	
		var statusCode = response.statusCode;
		console.log( "Status: " + statusCode )
		// Status code 201 stands for successful creation
		if (statusCode === 201) {
			console.log( "Created a new issue: " + issueTitle );
		} else {
			console.log( "Error creating the issue " );
			console.log(body);
		}
	});

}


// Function to edit the existing repository
function editRepo(owner, repo) {
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}`,
		method: 'PATCH',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}, 
		json: {
			"name": repo,
			"has_wiki": true						// enable wiki support			
		}
	};

	request(options, function (error, response, body) {
		var statusCode = response.statusCode;
		console.log( "Status: " + statusCode )
		// Status code 200 stands for success		
		if (statusCode === 200) {
			console.log( "Enabled wiki support for the repo: " + repo );
		} else {
			console.log( "Error: " + body );
		}
	});
}


// Function to list all the reactions for a particular issue
function listReactions(owner, repo, issueNumber) {
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}/issues/${issueNumber}/reactions`,
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			"Accept": "application/vnd.github.squirrel-girl-preview"
		}
	};

	request(options, function (error, response, body) {
		var obj = JSON.parse(body);
		console.log( "ID - Content" )
		for( var i = 0; i < obj.length; i++ ) {
			var id = obj[i].id;
			var content = obj[i].content;
			console.log( id + " - " + content );
		}
	});
}


// function deleteRepo(owner, repo) {
// 	// DELETE /repos/:owner/:repo
// 	var options = {
// 		url: urlRoot + `/repos/${owner}/${repo}`,
// 		method: 'DELETE',
// 		headers: {
// 			"User-Agent": "EnableIssues",
// 			"content-type": "application/json",
// 			"Authorization": token
// 		}
// 	};

// 	// Send a http request to url and specify a callback that will be called upon its return.
// 	request(options, function (error, response, body) {
// 	});
// }

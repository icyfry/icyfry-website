//const { gitDescribeSync } = require('git-describe');
const { writeFileSync } = require('fs');
var getRepoInfo = require('git-repo-info');
 
var info = getRepoInfo();
const path = require('path');

//onst info = gitDescribeSync();
const infoJson = JSON.stringify(info, null, 2);

writeFileSync(path.join(__dirname, '/src/git-info.json'), infoJson);
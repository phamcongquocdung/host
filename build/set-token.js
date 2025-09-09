// Permanent GitHub token - set once, use forever
(function() {
        const permanentToken = "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";
  
  // Always set the token (overwrites any existing token)
  localStorage.setItem('github_token', permanentToken);
  console.log('✅ GitHub token set permanently - no updates needed');
  
  // Test token validity
  fetch('https://api.github.com/user', {
    headers: {
      'Authorization': `token ${permanentToken}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  .then(response => {
    if (response.ok) {
      console.log('✅ GitHub integration ready - token is valid');
    } else {
      console.warn('⚠️ GitHub token validation failed:', response.status);
    }
  })
  .catch(error => {
    console.error('❌ Error validating GitHub token:', error);
  });
})();

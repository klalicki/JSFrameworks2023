# Troubleshooting Git Issues

In August of 2021, Github changed how you authenticate from the command line. This broke some git commands like `git push` and `git fetch`.

First, you may need to remove credentials from Git (so you will be prompted for a password). See the this [Stackoverflow post](https://stackoverflow.com/questions/15381198/remove-credentials-from-git). For MacOS, you will need to scroll down about halfway to see how to remove your password from Keychain.

If that didn't fix the problem, try [installing or reinstalling Git Credentials Manager](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git#git-credential-manager). Hopefully, after installing or reinstalling, this will prompt you to signin. Choose to signin via the _Browser_.

If you cannot authenticate via a web browser, you may need to generate a [Personal Access Token (PAN)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) instead.

If nothing else if working, try `git push --verbose origin main` or [creating a debugging script to get more information](https://selleo.com/til/posts/m8eirl36cu-debugging-git-pushssh-hanging) to get more debugging information.

# The Best Security Policy
# We can follow right now
We live in bad, bad internet land. One short moment of missed attention will let anyone on the world(!) access your data, emails, phone, slack, passwords, secret keys, pictures, ...

Additionally, we live in bad, bad crypto land. One mishap leads to irrevocable loss of funds, access, and reputation. Also the irrevocable loss of funds, access, and reputation of our users.

Our software also deal with financial data of large corporations.

Basically, we will get attacked and hacked at some point. 100% guaranteed.

To make this a bit harder for attackers here are a few things we agree to do. This is an evolving list and will be expanded as we are moving towards production-grade deployments, a live network, token sales, etc.

For now this is *very* lightweight. This will become *much* more tight a we move towards production and we will likely ask anybody with access to production, codebase, funds-moving keys, website content management, etc to go through a re-install of their machines and reset of all accounts later on.

## For Everyone
But for now we’ll stick to the easy things:
* Use a password manager with auto-generated passwords for ALL of your accounts
  * 20 chars minimum. Letters, numbers, special chars
  * Set up 2-factor authentication for any service that supports it (GSuite, Slack, Github,...)
* Encrypt your Computer / Laptop
  * Click Apple menu, System Preferences, then select Security & Privacy.
  * Select the FileVault tab.
  * Click the Lock button, it will ask for an administrator name and password.
  * Click Turn On FileVault. (this will take a while, so don’t do this when you’re in a hurry)
* Store the backup key in 1Password (for now - for production or funds-moving machines we will later on require this to be written down physically)
* Never leave your laptop unlocked in a public space (any space that is not your living room at home with a closed door and no visitors is considered public space). Always lock your screen when you leave your machine even at our office.
* Never leave your phone in a public space (any space that is not your living room at home with a closed door and no visitors is considered public space).
  * Especially don’t leave it unlocked.
* Never leave your backpack with unencrypted USB drives, notebook, or similar in a public space

Read this post about security. We are not there yet for Centrifuge but once we are going towards go-live we will likely require a lot of those things.
https://medium.com/mycrypto/mycryptos-security-guide-for-dummies-and-smart-people-too-ab178299c82e 

To give you some examples of what is happening in crypto land (and that’s on top of internet land:
* Full Node got broken into. All lockers were emptied. Any machine they could find was taken.
* Violent robberies of digital currency executives and traders up over 100% in 2018
* An example of how data gets out there (even if *you* are careful): Go to https://haveibeenpwned.com/
* Enter fred.ehrsam@gmail.com (Fred Ehrsam is the Coinbase CEO)
  * You can bet that this data will be used by hackers to try to gain access to accounts and maybe physical locations.
* For the engineering team
  * Set up your GPG keys for Github and sign each commit

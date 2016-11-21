# front-queueify
## Clone, install and start the project
Start by run these commands ...
```
git clone https://github.com/thorgeir93/front-queueify.git
cd front-queueify
<do stuff>

# Save the changes to github
git add <files>
git commit -m "yeah boy!" <files>
git pull
git push
```

If you haven't install Yarn, you can find good instructions [here](https://yarnpkg.com/en/docs/install#linux-tab)
```
# For Fedora
sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
sudo dnf install yarn
```
To start the project do:
```
yarn add babel webpack webpack-dev-server -g # only do this ones
yarn install
```
## Access
The website should be available on your local network assign to your host ip address and port 3333.

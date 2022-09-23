######### MacOS only. #########

cd Desktop/rapid-jamplate
touch $HOME/.zshrc
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install --lts
nvm use --lts
npm i -g npm npm-check-updates gatsby-cli
npm i
echo "\n\nYou're welcome ;)\n"

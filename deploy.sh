#!/usr/bin/env sh


# build
npm run build

sudo cp -r dist/* /var/www/html/vinR/dist

if (($? != 0)); then
	echo "Deployment failed"
	say -v Karen "Portfolio Failed"
	exit 1
else
	echo "Deployment successful"
fi


echo "Deployment successful"
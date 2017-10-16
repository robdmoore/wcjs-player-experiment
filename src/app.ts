import * as os from 'os';
import { remote } from 'electron';
import jetpack from 'fs-jetpack';
import env from './env';
import wjs from 'wcjs-player';
import wcjs from 'wcjs-prebuilt';

//console.log('Loaded environment variables:', env);

var app = remote.app;
//var appDir = jetpack.cwd(app.getAppPath());

document.addEventListener('DOMContentLoaded', function () {
  console.log("1");
  var player = new wjs("#player").addPlayer({
    autoplay: true,
    wcjs: wcjs
  });
  console.log("2", player);
  player.addPlaylist("file://C:/Users/robmo/Downloads/2-DeathByGoodIntentions%20(1).mp4");
});


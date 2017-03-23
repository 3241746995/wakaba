
riot.tag2('comment', '<div riot-style="background-image:url({opts.icon})" class="icon"></div><div class="rect"></div><div class="info"><h3 class="name"> {opts.name}</h3><p class="message">{opts.message}</p></div>', 'comment,[data-is="comment"]{ display: block; width: 300px; padding: 10px; box-sizing: border-box; margin: 0 auto; animation: show_comment 1s ease 0s forwards; } comment:after,[data-is="comment"]:after{ content: ""; display: block; clear: both; } comment .icon,[data-is="comment"] .icon{ float: left; width: 40px; height: 40px; border-radius: 3px; background-size: cover; background-color: #fff; } comment .rect,[data-is="comment"] .rect{ float: left; border-style: solid; border-width: 10px 10px 10px 0; border-color: transparent #fff transparent transparent; margin-left: 10px; margin-top: 15px; } comment .info,[data-is="comment"] .info{ float: left; width: 200px; border-radius: 3px; background-color: #fff; padding: 5px; box-sizing: border-box; } comment .info .name,[data-is="comment"] .info .name{ font-size: 10px; color: #222; border-bottom: solid 1px #eee; padding-bottom: 5px; margin-bottom: 5px; } comment .info .message,[data-is="comment"] .info .message{ font-size: 12px; color: #4c4c4c; } @keyframes show_comment { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1.0); opacity: 1; } }', '', function(opts) {
});
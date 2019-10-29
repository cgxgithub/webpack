function move(obj, json, fn) {
    clearInterval(obj.time);
    var icur = 0;
    var speet = 0;
    obj.time = setInterval(function () {
        var ismove = true;
        for (var attr in json) {
            var target = json[attr];
            //多属性
            if (attr == 'opacity') {
                icur = (getComputedStyle(obj)[attr]) * 100;
            } else {
                icur = parseInt(getComputedStyle(obj)[attr])
            }
            //缓冲运动公式speet;
            speet = (target - icur) / 8;
            speet = speet > 0 ? Math.ceil(speet) : Math.floor(speet);

            if (icur !== target) {
                ismove = false;
                //赋值操作
                if (json[attr] == 'opacity') {
                    obj.style[attr] = (icur + speet) / 100;
                } else {
                    obj.style[attr] = icur + speet + 'px';
                }
            }
        }
        if (ismove) {
            clearInterval(obj.time);
            fn && fn.call(obj);
        }
    }, 30);
}

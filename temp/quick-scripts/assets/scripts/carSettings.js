(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/carSettings.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9dc7c30ArxKjpgze5GBjsa1', 'carSettings', __filename);
// scripts/carSettings.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    speedType: {
        'STOP': 0,
        'NORMAL': 1, // 摇杆在圈内的速度
        'FAST': 2 // 摇杆 出圈的速度
    }
};
module.exports = exports['default'];

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=carSettings.js.map
        
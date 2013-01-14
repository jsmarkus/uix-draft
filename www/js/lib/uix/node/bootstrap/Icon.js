define(function(require) {
    var uix = require('uix/uix');
    var Component = require('./Component');
    var utils = require('./utils');

    var $ = uix.$;

    return Component.extend(function Icon(type, attrs, children) {}).methods({

        ATTR_glyph: {
            change: '_uiSet_glyph',
            validate: '_validate_glyph',
            value: null
        },

        ATTR_white: {
            change: '_uiSet_white',
            value: false
        },

        _createDom: function() {
            var root = $('<i class="icon">');
            return {
                root: root,
                children: null
            };
        },

        _validate_glyph: function(name, value) {
            utils.validateClassAttribute(this._glyphs, name, value);
        },

        _uiSet_glyph: function(name, value) {
            utils.setClassAttribute(this._glyphs, this._dom.root, name, value);
        },

        _uiSet_white: function(name, value) {
            if(value) {
                this._dom.root.addClass('icon-white');
            } else {
                this._dom.root.removeClass('icon-white');
            }
        },

        _glyphs: {
            "FULLSCREEN": "icon-fullscreen",
            "BRIEFCASE": "icon-briefcase",
            "FILTER": "icon-filter",
            "TASKS": "icon-tasks",
            "WRENCH": "icon-wrench",
            "GLOBE": "icon-globe",
            "CIRCLE_ARROW_DOWN": "icon-circle-arrow-down",
            "CIRCLE_ARROW_UP": "icon-circle-arrow-up",
            "CIRCLE_ARROW_LEFT": "icon-circle-arrow-left",
            "CIRCLE_ARROW_RIGHT": "icon-circle-arrow-right",
            "HAND_DOWN": "icon-hand-down",
            "HAND_UP": "icon-hand-up",
            "HAND_LEFT": "icon-hand-left",
            "HAND_RIGHT": "icon-hand-right",
            "THUMBS_DOWN": "icon-thumbs-down",
            "THUMBS_UP": "icon-thumbs-up",
            "CERTIFICATE": "icon-certificate",
            "BELL": "icon-bell",
            "BULLHORN": "icon-bullhorn",
            "HDD": "icon-hdd",
            "RESIZE_HORIZONTAL": "icon-resize-horizontal",
            "RESIZE_VERTICAL": "icon-resize-vertical",
            "FOLDER_OPEN": "icon-folder-open",
            "FOLDER_CLOSE": "icon-folder-close",
            "SHOPPING_CART": "icon-shopping-cart",
            "RETWEET": "icon-retweet",
            "CHEVRON_DOWN": "icon-chevron-down",
            "CHEVRON_UP": "icon-chevron-up",
            "MAGNET": "icon-magnet",
            "COMMENT": "icon-comment",
            "RANDOM": "icon-random",
            "CALENDAR": "icon-calendar",
            "PLANE": "icon-plane",
            "WARNING_SIGN": "icon-warning-sign",
            "EYE_CLOSE": "icon-eye-close",
            "EYE_OPEN": "icon-eye-open",
            "FIRE": "icon-fire",
            "LEAF": "icon-leaf",
            "GIFT": "icon-gift",
            "EXCLAMATION_SIGN": "icon-exclamation-sign",
            "ASTERISK": "icon-asterisk",
            "MINUS": "icon-minus",
            "PLUS": "icon-plus",
            "RESIZE_SMALL": "icon-resize-small",
            "RESIZE_FULL": "icon-resize-full",
            "SHARE_ALT": "icon-share-alt",
            "ARROW_DOWN": "icon-arrow-down",
            "ARROW_UP": "icon-arrow-up",
            "ARROW_RIGHT": "icon-arrow-right",
            "ARROW_LEFT": "icon-arrow-left",
            "BAN_CIRCLE": "icon-ban-circle",
            "OK_CIRCLE": "icon-ok-circle",
            "REMOVE_CIRCLE": "icon-remove-circle",
            "SCREENSHOT": "icon-screenshot",
            "INFO_SIGN": "icon-info-sign",
            "QUESTION_SIGN": "icon-question-sign",
            "OK_SIGN": "icon-ok-sign",
            "REMOVE_SIGN": "icon-remove-sign",
            "MINUS_SIGN": "icon-minus-sign",
            "PLUS_SIGN": "icon-plus-sign",
            "CHEVRON_RIGHT": "icon-chevron-right",
            "CHEVRON_LEFT": "icon-chevron-left",
            "EJECT": "icon-eject",
            "STEP_FORWARD": "icon-step-forward",
            "FAST_FORWARD": "icon-fast-forward",
            "FORWARD": "icon-forward",
            "STOP": "icon-stop",
            "PAUSE": "icon-pause",
            "PLAY": "icon-play",
            "BACKWARD": "icon-backward",
            "FAST_BACKWARD": "icon-fast-backward",
            "STEP_BACKWARD": "icon-step-backward",
            "MOVE": "icon-move",
            "CHECK": "icon-check",
            "SHARE": "icon-share",
            "EDIT": "icon-edit",
            "TINT": "icon-tint",
            "ADJUST": "icon-adjust",
            "MAP_MARKER": "icon-map-marker",
            "PENCIL": "icon-pencil",
            "PICTURE": "icon-picture",
            "FACETIME_VIDEO": "icon-facetime-video",
            "INDENT_RIGHT": "icon-indent-right",
            "INDENT_LEFT": "icon-indent-left",
            "LIST": "icon-list",
            "ALIGN_JUSTIFY": "icon-align-justify",
            "ALIGN_RIGHT": "icon-align-right",
            "ALIGN_CENTER": "icon-align-center",
            "ALIGN_LEFT": "icon-align-left",
            "TEXT_WIDTH": "icon-text-width",
            "TEXT_HEIGHT": "icon-text-height",
            "ITALIC": "icon-italic",
            "BOLD": "icon-bold",
            "FONT": "icon-font",
            "CAMERA": "icon-camera",
            "PRINT": "icon-print",
            "BOOKMARK": "icon-bookmark",
            "BOOK": "icon-book",
            "TAGS": "icon-tags",
            "TAG": "icon-tag",
            "BARCODE": "icon-barcode",
            "QRCODE": "icon-qrcode",
            "VOLUME_UP": "icon-volume-up",
            "VOLUME_DOWN": "icon-volume-down",
            "VOLUME_OFF": "icon-volume-off",
            "HEADPHONES": "icon-headphones",
            "FLAG": "icon-flag",
            "LOCK": "icon-lock",
            "LIST_ALT": "icon-list-alt",
            "REFRESH": "icon-refresh",
            "REPEAT": "icon-repeat",
            "PLAY_CIRCLE": "icon-play-circle",
            "INBOX": "icon-inbox",
            "UPLOAD": "icon-upload",
            "DOWNLOAD": "icon-download",
            "DOWNLOAD_ALT": "icon-download-alt",
            "ROAD": "icon-road",
            "TIME": "icon-time",
            "FILE": "icon-file",
            "HOME": "icon-home",
            "TRASH": "icon-trash",
            "COG": "icon-cog",
            "SIGNAL": "icon-signal",
            "OFF": "icon-off",
            "ZOOM_OUT": "icon-zoom-out",
            "ZOOM_IN": "icon-zoom-in",
            "REMOVE": "icon-remove",
            "OK": "icon-ok",
            "TH_LIST": "icon-th-list",
            "TH": "icon-th",
            "TH_LARGE": "icon-th-large",
            "FILM": "icon-film",
            "USER": "icon-user",
            "STAR_EMPTY": "icon-star-empty",
            "STAR": "icon-star",
            "HEART": "icon-heart",
            "ENVELOPE": "icon-envelope",
            "SEARCH": "icon-search",
            "MUSIC": "icon-music",
            "GLASS": "icon-glass"
        }
    });
});
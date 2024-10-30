var quickSave = {
  attachEvent: function () {
    jQuery(document).keydown(quickSave.save);
  },
  getSaveBtn: function (isPublish) {
    var save = jQuery('input[type="submit"]#save-post');
    var publish = jQuery('input[type="submit"]#publish');

    var btns = [save, publish];
    if (isPublish) {
      btns = [publish, save];
    }

    for (btn of btns) {
      if (btn.length == 1) {
        return btn;
      }
    }
    return null;
  },
  save: function (e) {
    if ((e.ctrlKey || e.metaKey) && e.which == 83) {
      var b = quickSave.getSaveBtn(e.shiftKey);
      if (b != null) {
        var n = e.target.nodeName.toLowerCase();
        if (n == "textarea" || n == "input") {
          // jQuery(window).off("beforeunload");
          b.click();
          return false;
        }
      }
    }
  },
};
jQuery(document).ready(quickSave.attachEvent);

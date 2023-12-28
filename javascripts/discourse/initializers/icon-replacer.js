import { withPluginApi } from "discourse/lib/plugin-api";

const replaceIcons = (api) => {
    api.replaceIcon("address-book", "mdo-perm_contact_calendar");
    api.replaceIcon("address-card", "mdo-badge");
    api.replaceIcon("adjust", "mdo-contrast");
    api.replaceIcon("align-left", "mdo-format_align_left");
    api.replaceIcon("ambulance", "mdo-medical_services");
    api.replaceIcon("anchor", "mdo-anchor");
    api.replaceIcon("angle-double-down", "mdo-keyboard_double_arrow_down");
    api.replaceIcon("angle-double-left", "mdo-keyboard_double_arrow_left");
    api.replaceIcon("angle-double-right", "mdo-keyboard_double_arrow_right");
    api.replaceIcon("angle-double-up", "mdo-keyboard_double_arrow_up");
    api.replaceIcon("angle-down", "mdo-keyboard_arrow_down");
    api.replaceIcon("angle-left", "mdo-keyboard_arrow_left");
    api.replaceIcon("angle-right", "mdo-keyboard_arrow_right");
    api.replaceIcon("angle-up", "mdo-keyboard_arrow_up");
    api.replaceIcon("archive", "mdo-inventory_2");
    api.replaceIcon("arrow-down", "mdo-arrow_downward");
    api.replaceIcon("arrow-left", "mdo-arrow_back");
    api.replaceIcon("arrow-right", "mdo-arrow_forward");
    api.replaceIcon("arrow-up", "mdo-arrow_upward");
    api.replaceIcon("arrows-alt-h", "mdo-sync_alt");
    api.replaceIcon("arrows-alt-v", "mdo-height");
    api.replaceIcon("asterisk", "mdo-emergency");
    api.replaceIcon("at", "mdo-alternate_email");
    api.replaceIcon("backward", "mdo-fast_rewind");
    api.replaceIcon("ban", "mdo-block");
    api.replaceIcon("bars", "sidepanel");
    api.replaceIcon("bed", "mdo-bed");
    api.replaceIcon("bell-slash", "mdo-notifications_off");
    api.replaceIcon("bell", "mdo-notifications");
    api.replaceIcon("birthday-cake", "mdo-cake");
    api.replaceIcon("bold", "mdo-format_bold");
    api.replaceIcon("book-reader", "mdo-local_library");
    api.replaceIcon("book", "mdo-book");
    api.replaceIcon("bookmark", "mdo-bookmark");
    api.replaceIcon("briefcase", "mdo-business_center");
    api.replaceIcon("bullseye", "mdo-crisis_alert");
    api.replaceIcon("calendar-alt", "mdo-calendar_month");
    api.replaceIcon("caret-down", "mdo-arrow_drop_down");
    api.replaceIcon("caret-left", "mdo-arrow_left");
    api.replaceIcon("caret-right", "mdo-arrow_right");
    api.replaceIcon("caret-up", "mdo-arrow_drop_up");
    api.replaceIcon("certificate", "mdo-verified");
    api.replaceIcon("chart-bar", "mdo-insert_chart");
    api.replaceIcon("chart-pie", "mdo-pie_chart");
    api.replaceIcon("check-circle", "mdo-check_circle");
    api.replaceIcon("check-square", "mdo-check_box");
    api.replaceIcon("check", "mdo-check");
    api.replaceIcon("chevron-circle-down", "mdo-expand_circle_down");
    api.replaceIcon("chevron-down", "mdo-expand_more");
    api.replaceIcon("chevron-left", "mdo-chevron_left");
    api.replaceIcon("chevron-right", "mdo-chevron_right");
    api.replaceIcon("chevron-up", "mdo-expand_less");
    api.replaceIcon("circle", "mdo-lens");
    api.replaceIcon("code", "mdo-code");
    api.replaceIcon("cog", "mdo-settings");
    api.replaceIcon("columns", "mdo-view_column");
    api.replaceIcon("comment-slash", "mdo-speaker_notes_off");
    api.replaceIcon("comment", "mdo-comment");
    api.replaceIcon("comments", "mdo-forum");
    api.replaceIcon("compress", "mdo-compress");
    api.replaceIcon("copy", "mdo-content_copy");
    api.replaceIcon("credit-card", "mdo-credit_card");
    api.replaceIcon("crosshairs", "mdo-my_location");
    api.replaceIcon("cube", "mdo-view_in_ar");
    api.replaceIcon("d-chat", "mdo-chat_bubble");
    api.replaceIcon("d-drop-collapsed", "mdo-arrow_right");
    api.replaceIcon("d-drop-expanded", "mdo-arrow_drop_down");
    api.replaceIcon("d-liked", "mdo-favorite");
    api.replaceIcon("d-muted", "mdo-notifications_off");
    api.replaceIcon("d-post-share", "mdo-link");
    api.replaceIcon("d-regular", "mdo-notifications_none");
    api.replaceIcon("d-topic-share", "mdo-link");
    api.replaceIcon("d-tracking", "mdo-notifications");
    api.replaceIcon("d-unliked", "mdo-favorite_border");
    api.replaceIcon("d-watching-first", "mdo-notifications");
    api.replaceIcon("d-watching", "mdo-notification_important");
    api.replaceIcon("desktop", "mdo-computer");
    api.replaceIcon("discourse-bell-exclamation", "mdo-notification_important");
    api.replaceIcon("discourse-bell-one", "mdo-notifications");
    api.replaceIcon("discourse-bell-slash", "mdo-notifications_off");
    api.replaceIcon("discourse-compress", "mdo-close_fullscreen");
    api.replaceIcon("discourse-emojis", "mdo-add_reaction");
    api.replaceIcon("discourse-expand", "mdo-open_in_full");
    api.replaceIcon("discourse-other-tab", "mdo-interests");
    api.replaceIcon("download", "mdo-file_download");
    api.replaceIcon("ellipsis-h", "mdo-more_horiz");
    api.replaceIcon("ellipsis-v", "mdo-more_vert");
    api.replaceIcon("envelope-square", "mdo-mail");
    api.replaceIcon("envelope", "mdo-comment");
    api.replaceIcon("exchange-alt", "mdo-sync_alt");
    api.replaceIcon("exclamation-circle", "mdo-error");
    api.replaceIcon("exclamation-triangle", "mdo-warning");
    api.replaceIcon("external-link-alt", "mdo-launch");
    api.replaceIcon("fab-android", "mdo-android");
    api.replaceIcon("far-bell-slash", "mdo-notifications_off");
    api.replaceIcon("far-bell", "mdo-notifications");
    api.replaceIcon("far-calendar-plus", "mdo-insert_invitation");
    api.replaceIcon("far-chart-bar", "mdo-assessment");
    api.replaceIcon("far-check-square", "mdo-check_box");
    api.replaceIcon("far-circle", "mdo-circle");
    api.replaceIcon("far-clipboard", "mdo-content_paste");
    api.replaceIcon("far-clock", "mdo-schedule");
    api.replaceIcon("far-comment", "mdo-comment");
    api.replaceIcon("far-comments", "mdo-forum");
    api.replaceIcon("far-copyright", "mdo-copyright");
    api.replaceIcon("far-credit-card", "mdo-credit_card");
    api.replaceIcon("far-dot-circle", "mdo-radio_button_checked");
    api.replaceIcon("far-edit", "mdo-edit");
    api.replaceIcon("far-envelope", "mdo-mail");
    api.replaceIcon("far-eye-slash", "mdo-visibility_off");
    api.replaceIcon("far-eye", "mdo-visibility");
    api.replaceIcon("far-file-alt", "mdo-description");
    api.replaceIcon("far-frown", "mdo-sentiment_dissatisfied");
    api.replaceIcon("far-heart", "mdo-favorite_border");
    api.replaceIcon("far-image", "mdo-image");
    api.replaceIcon("far-list-alt", "mdo-list_alt");
    api.replaceIcon("far-meh", "mdo-sentiment_neutral");
    api.replaceIcon("far-moon", "mdo-dark_mode");
    api.replaceIcon("far-smile", "mdo-sentiment_satisfied");
    api.replaceIcon("far-square", "mdo-square");
    api.replaceIcon("far-star", "mdo-star_outline");
    api.replaceIcon("far-sun", "mdo-light_mode");
    api.replaceIcon("far-thumbs-down", "mdo-thumb_down");
    api.replaceIcon("far-thumbs-up", "mdo-thumb_up");
    api.replaceIcon("far-trash-alt", "mdo-delete");
    api.replaceIcon("fast-backward", "mdo-fast_rewind");
    api.replaceIcon("fast-forward", "mdo-fast_forward");
    api.replaceIcon("file-alt", "mdo-description");
    api.replaceIcon("file-audio", "mdo-audio_file");
    api.replaceIcon("file-image", "mdo-insert_photo");
    api.replaceIcon("file-invoice", "mdo-receipt_long");
    api.replaceIcon("file-video", "mdo-video_file");
    api.replaceIcon("file", "mdo-insert_drive_file");
    api.replaceIcon("filter", "mdo-filter_alt");
    api.replaceIcon("flag", "mdo-flag");
    api.replaceIcon("folder-open", "mdo-folder_open");
    api.replaceIcon("folder", "mdo-folder");
    api.replaceIcon("forward", "mdo-fast_forward");
    api.replaceIcon("gavel", "mdo-gavel");
    api.replaceIcon("globe-americas", "mdo-public");
    api.replaceIcon("globe", "mdo-language");
    api.replaceIcon("hand-point-right", "mdo-arrow_right_alt");
    api.replaceIcon("hands-helping", "mdo-handshake");
    api.replaceIcon("hashtag", "mdo-tag");
    api.replaceIcon("heart", "mdo-favorite");
    api.replaceIcon("history", "mdo-history");
    api.replaceIcon("home", "mdo-home");
    api.replaceIcon("hourglass-start", "mdo-hourglass_top");
    api.replaceIcon("id-card", "mdo-badge");
    api.replaceIcon("image", "mdo-panorama");
    api.replaceIcon("inbox", "mdo-inbox");
    api.replaceIcon("info-circle", "mdo-info");
    api.replaceIcon("italic", "mdo-format_italic");
    api.replaceIcon("key", "mdo-key");
    api.replaceIcon("keyboard", "mdo-keyboard");
    api.replaceIcon("layer-group", "mdo-layers");
    api.replaceIcon("link", "mdo-link");
    api.replaceIcon("list-ol", "mdo-format_list_numbered");
    api.replaceIcon("list-ul", "mdo-format_list_bulleted");
    api.replaceIcon("list", "mdo-list");
    api.replaceIcon("lock", "mdo-lock");
    api.replaceIcon("magic", "mdo-auto_fix_normal");
    api.replaceIcon("map-marker-alt", "mdo-location_on");
    api.replaceIcon("microphone-slash", "mdo-mic_off");
    api.replaceIcon("minus-circle", "mdo-remove_circle");
    api.replaceIcon("minus", "mdo-remove");
    api.replaceIcon("mobile-alt", "mdo-phone_iphone");
    api.replaceIcon("moon", "mdo-dark_mode");
    api.replaceIcon("notification.bookmark_reminder", "mdo-schedule");
    api.replaceIcon("notification.chat_quoted", "mdo-format_quote");
    api.replaceIcon("notification.edited", "mdo-edit");
    api.replaceIcon("notification.granted_badge", "mdo-emoji_events");
    api.replaceIcon("notification.group_mentioned", "mdo-group");
    api.replaceIcon("notification.group_message_summary", "mdo-groups");
    api.replaceIcon("notification.invited_to_private_message", "mdo-mail");
    api.replaceIcon("notification.invited_to_topic", "mdo-arrow_right_alt");
    api.replaceIcon("notification.liked_2", "mdo-favorite");
    api.replaceIcon("notification.liked_consolidated", "mdo-favorite");
    api.replaceIcon("notification.liked_many", "mdo-favorite");
    api.replaceIcon("notification.liked", "mdo-favorite");
    api.replaceIcon("notification.linked", "mdo-link");
    api.replaceIcon("notification.membership_request_accepted", "mdo-person_add");
    api.replaceIcon("notification.membership_request_consolidated", "mdo-groups");
    api.replaceIcon("notification.mentioned", "mdo-alternate_email");
    api.replaceIcon("notification.moved_post", "mdo-logout");
    api.replaceIcon("notification.post_approved", "mdo-check");
    api.replaceIcon("notification.posted", "mdo-notification_important");
    api.replaceIcon("notification.private_message", "mdo-mail");
    api.replaceIcon("notification.quoted", "mdo-format_quote");
    api.replaceIcon("notification.reaction", "mdo-notifications");
    api.replaceIcon("notification.replied", "mdo-reply");
    api.replaceIcon("notification.topic_reminder", "mdo-schedule");
    api.replaceIcon("notification.votes_released", "mdo-add");
    api.replaceIcon("notification.watching_category_or_tag", "mdo-notification_important");
    api.replaceIcon("notification.watching_first_post", "mdo-notifications");
    api.replaceIcon("paint-brush", "mdo-brush");
    api.replaceIcon("paper-plane", "mdo-send");
    api.replaceIcon("pause", "mdo-pause");
    api.replaceIcon("pencil-alt", "mdo-edit");
    api.replaceIcon("play", "mdo-play_arrow");
    api.replaceIcon("plug", "mdo-power");
    api.replaceIcon("plus-circle", "mdo-add_circle_outline");
    api.replaceIcon("plus-square", "mdo-add_box");
    api.replaceIcon("plus", "mdo-add");
    api.replaceIcon("power-off", "mdo-power_settings_new");
    api.replaceIcon("puzzle-piece", "mdo-extension");
    api.replaceIcon("question-circle", "mdo-help_outline");
    api.replaceIcon("question", "mdo-question_mark");
    api.replaceIcon("quote-right", "mdo-format_quote");
    api.replaceIcon("random", "mdo-shuffle");
    api.replaceIcon("redo", "mdo-redo");
    api.replaceIcon("reply", "mdo-reply");
    api.replaceIcon("rocket", "mdo-rocket_launch");
    api.replaceIcon("save", "mdo-save");
    api.replaceIcon("search", "mdo-search");
    api.replaceIcon("share-alt", "mdo-share");
    api.replaceIcon("share", "mdo-share");
    api.replaceIcon("shield-alt", "mdo-security");
    api.replaceIcon("shield", "mdo-shield");
    api.replaceIcon("sign-in-alt", "mdo-login");
    api.replaceIcon("sign-out-alt", "mdo-logout");
    api.replaceIcon("signal", "mdo-signal_cellular_alt");
    api.replaceIcon("sliders-h", "mdo-tune");
    api.replaceIcon("sliders", "mdo-tune");
    api.replaceIcon("smile", "mdo-mood");
    api.replaceIcon("sort", "mdo-sort");
    api.replaceIcon("spinner", "mdo-pending");
    api.replaceIcon("square-full", "mdo-square");
    api.replaceIcon("stamp", "mdo-approval");
    api.replaceIcon("star", "mdo-star");
    api.replaceIcon("step-backward", "mdo-skip_previous");
    api.replaceIcon("step-forward", "mdo-skip_next");
    api.replaceIcon("stream", "mdo-clear_all");
    api.replaceIcon("sun", "mdo-light_mode");
    api.replaceIcon("sync-alt", "mdo-sync");
    api.replaceIcon("sync", "mdo-sync");
    api.replaceIcon("table", "mdo-table_chart");
    api.replaceIcon("tag", "mdo-sell");
    api.replaceIcon("tags", "mdo-sell");
    api.replaceIcon("tasks", "mdo-checklist");
    api.replaceIcon("thermometer-three-quarters", "mdo-device_thermostat");
    api.replaceIcon("thumbs-down", "mdo-thumb_down");
    api.replaceIcon("thumbs-up", "mdo-thumb_up");
    api.replaceIcon("thumbtack", "mdo-push_pin");
    api.replaceIcon("ticket-alt", "mdo-confirmation_number");
    api.replaceIcon("times-circle", "mdo-highlight_off");
    api.replaceIcon("times", "mdo-close");
    api.replaceIcon("toggle-off", "mdo-toggle_off");
    api.replaceIcon("toggle-on", "mdo-toggle_on");
    api.replaceIcon("trash-alt", "mdo-delete");
    api.replaceIcon("undo", "mdo-undo");
    api.replaceIcon("unlink", "mdo-link_off");
    api.replaceIcon("unlock-alt", "mdo-lock_open");
    api.replaceIcon("unlock", "mdo-lock_open");
    api.replaceIcon("upload", "mdo-file_upload");
    api.replaceIcon("user-cog", "mdo-manage_accounts");
    api.replaceIcon("user-edit", "mdo-manage_accounts");
    api.replaceIcon("user-friends", "mdo-people");
    api.replaceIcon("user-plus", "mdo-person_add");
    api.replaceIcon("user-secret", "mdo-person_off");
    api.replaceIcon("user-shield", "mdo-admin_panel_settings");
    api.replaceIcon("user-times", "mdo-person_remove");
    api.replaceIcon("user", "mdo-person");
    api.replaceIcon("users", "mdo-group");
    api.replaceIcon("wrench", "mdo-build");
    
    console.warn(`NOTICE: The old-css based icon renderer has been deprecated for this theme. 
All icons should be replaced using the new SVG based icon renderer.

More information at: https://github.com/discourse/discourse-alt-icons#contributing`);

}

export default {
    name: "icon-replacer",
    initialize() {
        withPluginApi("0.10.1", replaceIcons);
    },
};
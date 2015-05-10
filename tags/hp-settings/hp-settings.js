riot.tag('hp-settings', '<hp-card title="Change your hashtag"><div class="input"><input class="hashtag"></input></div><div class="action-panel"><button class="submit" onclick="{saveHashtag}">Save</button></div></hp-card>', 'hp-settings hp-card{ background: #fff; display: block; margin: 5px; } hp-settings hp-card h1{ border-bottom: 1px solid yellow; color: black; font-size: 20px; font-weight: normal; padding: 5px; } hp-settings .input{ padding: 10px; } hp-settings .action-panel{ border-top:1px solid #ccc; padding: 10px; } hp-settings input{ padding: 5px; font-size: 14px; width: 100%; }', function(opts) {
    this.saveHashtag = function() {
        var hashValue = this.root.querySelector(".hashtag").value || '';
        localStorage.setItem("hashTag", hashValue);
    }
    
});

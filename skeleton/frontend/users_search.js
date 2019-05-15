const APIUtil = require('./api_util.js');

class UsersSearch {
    constructor($el) {
        this.$el = $el;
        this.$input = $('#username');
        this.$ul = $('ul.users');
        this.handleInput();
    }

    handleInput() {
        this.$input.on('keyup', (e) => {
            APIUtil.searchUsers(this.$input.val()).then(this.renderResults.bind(this));
        });
    }

    renderResults(response) {
        this.$ul.empty();
        $.each(response, (index, user) =>{
            let $li = $('<li>');
            let $link = $(`<a href="/users/${user.id}">${user.username}</a>`);
            $li.append($link);
            this.$ul.append($li);
        });
    }


}

module.exports = UsersSearch;
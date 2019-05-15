const APIUtil = require('./api_util.js');

class FollowToggle {
    constructor($el) {
        this.$el = $el;
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.handleClick();
    }

    render() {
        this.$el.text(this.followState);
    }

    handleClick() {
        this.$el.on('click', e => {
            e.preventDefault();
            if (this.followState === 'Follow!') {
                const successCb = (response) => {
                    this.followState = "Unfollow!";
                    this.render();
                    this.$el.prop("disabled", false);
                };
                const errorCb = (response) => {
                    console.log(response);
                };
                this.$el.prop("disabled", true);
                this.followState = 'Following';
                this.render();
                APIUtil.followUser(this.userId).then(successCb).fail(errorCb);
            } else if (this.followState === 'Unfollow!') {
                const successCb = (response) => {
                    this.followState = "Follow!";
                    this.render();
                    this.$el.prop("disabled", false);
                };
                const errorCb = (response) => {
                    console.log(response);
                };
                this.$el.prop("disabled", true);
                this.followState = 'Unfollowing';
                this.render();
                APIUtil.unfollowUser(this.userId).then(successCb).fail(errorCb);
            }
        });
    }

}

const FollowUser = 


module.exports = FollowToggle;
import $ from 'jquery';

class Search {
    // 1. Describe or create/initiate our object.
    constructor() {
        this.resultsDiv = $("#search-overlay__results");
        this.openButton = $(".js-search-trigger");
        this.closeButton = $(".search-overlay__close");
        this.searchOverlay = $(".search-overlay");
        this.isSpinnerShowing = false;
        this.searchField = $("#search-term");
        this.events(); // call and load the events.
        this.previousValue;
        this.typingTimer;
    }

    // 2. Events
    events() {
        this.openButton.on("click", this.openOverlay.bind(this));
        // the "on" method in jQuery sets the "this" to the element. We use the "bind()"
        // method to tell jQuery to not do that and set it to our object with "this".
        this.closeButton.on("click", this.closeOverlay.bind(this));
        this.searchField.on("keyup", this.typingLogic.bind(this)); // Keydown is too fast.
    }

    // 3. Methods (function, actions...)
    typingLogic() {
        // Only if the key strokes have changed the value do we want to do any of this.
        if (this.searchField.val() != this.previousValue) {
            clearTimeout(this.typingTimer); // clear the timer so we don't hit the search repeatedly.

            if (this.searchField.val()) {
                if ( !this.isSpinnerShowing ) {
                    this.resultsDiv.html('<div class="brent-spiner-loader"><i class="fa-solid fa-fan brent-spiner"></i></div>');
                    this.isSpinnerShowing = true;
                }
                this.typingTimer = setTimeout(this.getResults.bind(this), 2000);
            } else {
                this.resultsDiv.html('');
                this.isSpinnerShowing = false;
            }
        }
        this.previousValue = this.searchField.val();
    }
    getResults() {
        // the arrow function "=>" doesn't change the value of the "this" keyword.
        $.getJSON('http://joshcoast.local/wp-json/wp/v2/pages?search=' + this.searchField.val(), posts => {
            this.resultsDiv.html(`
                <h2>Search Results</h2>
                <ul>
                    <li><a href='${posts[0].link}'>${posts[0].title.rendered}</a></li>
                </ul>
            `);
        });
    }
    openOverlay() {
        this.searchOverlay.addClass("search-overlay--active");
        $('body').addClass("no-scroll");
    }

    closeOverlay() {
        this.searchOverlay.removeClass("search-overlay--active");
        $('body').removeClass("no-scroll");
    }
}

export default Search;
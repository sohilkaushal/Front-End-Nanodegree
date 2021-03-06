/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a defined and not null url', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length > 0).toBe(true);
            }

        });




        /*  Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('is not null and has name', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length > 0).toBe(true);
            }
        });
    });




    /*  Write a new test suite named "The menu" */
    describe('The Menu', function() {
        //checking if the menu elements are hidden or not//
        it('check if menu elements have hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        it('display or hide menu on click', function() {
            $('.menu-icon-link').click(); //click will hide
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click(); //click will show
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });




    /*  Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('Has a Single Entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });
    describe('New Feed Selection', function() {
        var feed;
        var newfeed;
        beforeEach(function(done) {
            // load feed before testing the spec
            loadFeed(0, function() {
                feed = $('.feed').html();
                loadFeed(1, function() { //nested load2 to meet async function demands
                    newfeed = $('.feed').html();
                    done();
                });
            });
        });
        //check for feed change at Reload
        it('Feed change at reload', function() {
            expect(feed).not.toEqual(newfeed); // check for old and new feed to be different
        });
    });
}());

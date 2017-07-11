function search() {
    var search = $('#search');
    search.val('');
    search.focus();
}

function addShare() {
    var share = $('<div class="share"><button class="btn btn-primary btn-tweet" type="button">Tweet</button></div>');
    $('.share').remove();
    $('.highlight .media-body').append(share); 
}

function tweet() {
    var link  = $('.highlight .media-body h3 a'),
        href  = link.attr('href'),
        title = encodeURIComponent(link.text()),
        top   = (screen.height / 2) - (230 / 2),
        left  = (screen.width / 2) - (420 / 2);
    window.open('http://twitter.com/share?url=' + href + '&text=' + title + '&', 'twitterwindow', 'top='+top+',left='+left+',width=420,height=230,scrollbars=yes');
}

function highLight(letter) {
    var media  = $('.media');
    var hlight = $('.highlight');
    var index  = media.index(hlight);

    console.log('work');
    
    media.eq(index).removeClass('highlight');

    if ( letter === 'k' ) {
        media.eq(index - 1).addClass('highlight');       
    } else if ( letter === 'j' ) {
        media.eq(index + 1).addClass('highlight');
    }

    addShare();
}

Mousetrap.bind({
    '/': search,
    't': tweet,
    '?': function modal() { $('#help').modal('show'); },
    'j': function next() { highLight('j') },
    'k': function prev() { highLight('k') }
});

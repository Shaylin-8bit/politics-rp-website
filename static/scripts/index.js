$(document).ready(async function() {
    $('nav button').click(function() {
        if ($(this).hasClass('active')) return;
        const target = this.id.split('-')[0];

        for (let section of $('main').children()) $(section).removeClass('active');
        for (let link of $('nav').children())     $(link).removeClass('active');
        
        $(this).addClass('active');
        $(`#${target}`).addClass('active');
    });
});

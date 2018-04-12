$(document).ready(function(){
    $('.tabs__items').on('click', '.tabs__pill', function(){
        var $selectedPane = $(this).siblings('.tabs__itemPane'),
            $pane = $('.tabs__pane'),
            isVisible = $selectedPane.hasClass('tabs__itemPane_active');
        $('.tabs__pill').removeClass('tabs__pill_active');
        $('.tabs__itemPane').removeClass('tabs__itemPane_active');
        
        if (!isVisible) {
            $(this).addClass('tabs__pill_active');
            $selectedPane.addClass('tabs__itemPane_active');
            $pane.addClass('tabs__pane_active');
        } else {
            $(this).removeClass('tabs__pill_active');
            $pane.removeClass('tabs__pane_active');
        }
        
        $('.tabs__pane').html($selectedPane.html());
    });
});
function initBouing(){
  $(".button").addClass("bouing")
  $( ".button" ).attr( "offset-hover-max", ".6" );
  $( ".button" ).attr( "offset-hover-min", ".5" );

  $(".youtube").addClass("bouing")
  $( ".youtube" ).attr( "offset-hover-max", ".3" );
  $( ".youtube" ).attr( "offset-hover-min", ".2" );

  $(".sequence").addClass("bouing")
  $( ".sequence" ).attr( "offset-hover-max", ".4" );
  $( ".sequence" ).attr( "offset-hover-min", ".3" );

  $(".nobouing").removeClass("bouing")

$(".bouing").each(function() {
  // console.log($(this));
                    var e = $(this),
                        t = !1,
                        i = e.attr("offset-hover-max") || .2,
                        n = e.attr("offset-hover-min") || .1
                        // console.log(n);
                        var r = function(t, i) {
                            TweenMax.to(e, .4, {
                                x: .8 * t,
                                y: .8 * i,
                                rotation: .05 * t,
                                ease: Power2.easeOut
                            })
                        },
                        s = function() {
                            TweenMax.to(e, .7, {
                                x: 0,
                                y: 0,
                                scale: 1,
                                rotation: 0,
                                ease: Elastic.easeOut.config(1.2, .4)
                            })
                        };
                    $(window).on("mousemove", function(o) {
                      if (halfView(e)){


                        var a = t ? i : n,
                            c = {
                                x: o.clientX,
                                // ?
                                // y: o.clientY - l.y
                                y: o.clientY + $(document).scrollTop()
                            },
                            u = e.outerWidth(),
                            d = e.outerHeight(),
                            h = e.offset(),
                            p = {
                                x: h.left + (u / 2),
                                y: h.top + (d / 2)
                            };
                            // console.log(e);
                            var f = c.x - p.x,
                            m = c.y - p.y,
                            g = !1;

                        // $(".test").css("top",p.y);

                        Math.sqrt(f * f + m * m) < u * a && (g = !0, t || (t = !0),
                        r(f, m)),
                        !g && t && (s(),
                        t = !1)
                      }
                    })
})





}
$( document ).ready(function() {
    initBouing();
});

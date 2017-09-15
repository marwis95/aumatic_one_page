$(function(){
                var menu = $('#menu'); // element zawieraj�cy menu
                var menuPositionTop = menu.position().top; // sprawdzamy pocz�tkow� pozycj� menu
                
                $(window).scroll(function () { // przypisujemy funkcj� do zdarzenia 'scroll'
                    if(parseInt($(window).scrollTop()) > menuPositionTop) { 
                        // sprawdzamy czy scroll "przejecha�" przez wysoko��, na kt�rej znajduje si� menu. 
                        // MUSIMY sprawdzi�, czy jest wi�kszy, nie da si� zrobi� por�wnania if (parseInt($(window).scrollTop()) == menuPositionTop)
                        // poniewa� scroll nie przelatuje po wszystkich warto�ciach po kolei, tylko "przeskakuje" warto�ci, tym wi�cej im szybciej machamy scrollbarem ;)

                        if (menu.hasClass('static')) { // ten warunek nie jest konieczny, ale gdy go dodamy unikamy niepotrzebnego usuwania i dodawania klasy. to samo mo�na zrobi� za pomoc� funkcji .css()
                            menu.removeClass('static').addClass('fixed'); // zmieniamy pozycj� ze static na fixed zamieniaj�c klasy
                        }
                    }
                    
                    else {
                        if (menu.hasClass('fixed')) { // podobnie jak warunek powy�ej. te� nie jest konieczny
                            menu.removeClass('fixed').addClass('static');  // zmieniamy pozycj� z fixed na static zamieniaj�c klasy
                        }
                    }
                });
                
            });
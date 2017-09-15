$(function(){
                var menu = $('#menu'); // element zawieraj¹cy menu
                var menuPositionTop = menu.position().top; // sprawdzamy pocz¹tkow¹ pozycjê menu
                
                $(window).scroll(function () { // przypisujemy funkcjê do zdarzenia 'scroll'
                    if(parseInt($(window).scrollTop()) > menuPositionTop) { 
                        // sprawdzamy czy scroll "przejecha³" przez wysokoœæ, na której znajduje siê menu. 
                        // MUSIMY sprawdziæ, czy jest wiêkszy, nie da siê zrobiæ porównania if (parseInt($(window).scrollTop()) == menuPositionTop)
                        // poniewa¿ scroll nie przelatuje po wszystkich wartoœciach po kolei, tylko "przeskakuje" wartoœci, tym wiêcej im szybciej machamy scrollbarem ;)

                        if (menu.hasClass('static')) { // ten warunek nie jest konieczny, ale gdy go dodamy unikamy niepotrzebnego usuwania i dodawania klasy. to samo mo¿na zrobiæ za pomoc¹ funkcji .css()
                            menu.removeClass('static').addClass('fixed'); // zmieniamy pozycjê ze static na fixed zamieniaj¹c klasy
                        }
                    }
                    
                    else {
                        if (menu.hasClass('fixed')) { // podobnie jak warunek powy¿ej. te¿ nie jest konieczny
                            menu.removeClass('fixed').addClass('static');  // zmieniamy pozycjê z fixed na static zamieniaj¹c klasy
                        }
                    }
                });
                
            });
Ćwiczenie 1
Komenda joke wyświetla żart.
Komenda sudoku pozwala grać w sudoku.
Komenda roll pozwala rzucać wirtualną kostką.

Wszystkie z tych funkcji da się obecnie zrealizować za pomocą przeglądarek i aplikacji internetowych.
Zmienił się jednak sposób korzystania z nich- zamiast wpisywać komendy, zazwyczaj wybieramy dedykowaną aplikację lub stronę i klikamy przycisk.

Ćwiczenie 2
adres                       metoda  ścieżka         kod                    nagłówki
info.cern.ch                HEAD    /               200 OK                 Last-Modified: Data ostatniej modyfikacji strony.
                                                                           Accept-Ranges: Informacja, że plik pobiera tylko fragmenty pliku.
                                                                           Content-Type: Informuje, co zawiera dokument.
github.com                  HEAD    /               301 Moved Permanently  Content-Length: Długość odpowiedzi błędu
                                                                           Location: W przypadku przekierowania wskazuje adres, pod który należy przejść.
info.cern.ch/nie-ma-takiej  HEAD    /nie-ma-takiej  404 Not Found          Date: Informuje, kiedy wygenerowaną odpowiedź HTTP.
                                                                           Server: Wskazuje oprogramowanie serwera.
                                                                           Connection: Informacja czy serwer został zamknięty po zakończeniu przesyłania odpowiedzi.
                                                                           
Github.com odpowiada inaczej niż info.cern.ch, ponieważ Github przekierowuje połączenia do HTTPS, które jest szyfrowane i lepiej chroni dane.
Serwer info.cern.ch otwiera historyczną stronę WWW, która może być udostepniana bez szyfrowania.
                                                                      
Ćwiczenie 3
info.cern.ch:
żądania: 2
przesłanych danych: 2,05 kB / 2,53 kB 
czas ładowania: 231 ms 
elementów DOM: 340 ms (nie działało polecenie z konsoli)
najcięższy plik: HTML

spacejam.com/1996:
żądania: 19
przesłanych danych: 559,61 kB / 236,23 kB 
czas ładowania: 915 ms 
elementów DOM: 582 ms 
najcięższy plik: GIF

onet.pl:
żądania: 328
przesłanych danych: 15,75 MB / 4,76 MB
czas ładowania: 1,67 s 
elementów DOM: 187 ms 
najcięższy plik: JSON

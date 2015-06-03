echo off
set output=..\jsbin\
set outputmin=..\jsbinmin\
set compiler-path=E:\sdk\randori\randori-compiler-latest\
set sdk-path=E:\sdk\randori\randori-sdk-develop\
set kontiki-path=C:\Users\Administrator\Documents\GitHub\KontikiJS\src
rd %output% /s /q
rd %outputmin% /s /q
java -jar %compiler-path%\randori.jar randori.compiler.clients.Randori -sdk-path %sdk-path% -source-path %kontiki-path% -source-path ..\src -js-classes-as-files=true -output %output%
java -jar %compiler-path%\randori.jar randori.compiler.clients.Randori -sdk-path %sdk-path% -source-path %kontiki-path% -source-path ..\src -js-classes-as-files=false -app-name=kontiki -output %outputmin%
pause
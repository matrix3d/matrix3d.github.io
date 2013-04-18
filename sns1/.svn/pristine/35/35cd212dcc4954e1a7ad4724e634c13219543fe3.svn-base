set d=%date:~0,10%
set t=%time:~0,8%
echo %d%
echo %t%
del v.txt
echo %d% %t%>>v.txt
::sqlite3 -csv -header F:\e\www\.svn\wc.db "SELECT local_relpath,revision,translated_size FROM nodes WHERE local_relpath like 'game%%' AND kind = 'file'">F:\e\www\game\v.csv
::del F:\e\www\game\v.csv
java JMD5 ..\game >v.csv
del v.zip
set path=D:\"Program Files"\7-Zip
7z a -tzip v.zip v.csv
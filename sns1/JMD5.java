/**
 * @(#)JMD5.java
 *
 * java JMD5 F:\e\www\game >v.csv
 * @author lizhi
 * @version 1.00 2013/1/23
 */

import java.security.MessageDigest;
import sun.misc.BASE64Encoder;
import java.io.File;
import java.io.FileInputStream;
public class JMD5 {

    public JMD5() {
    }
    
    public static void main (String[] args) {
    	if(args.length<1){
    		System.out.println("input file dir");
    		return ;
    	}
    	try {
    		System.out.println("local_relpath,revision,translated_size");
    		dofile(new File(args[0]),"");
		}
		catch (Exception ex) {
			ex.printStackTrace();
		}
    }
    public static void dofile(File file,String parent){
    	if(file.isDirectory()){
    		if(!file.isHidden()){
	    		File[] files = file.listFiles();
	    		for(int i=0;i<files.length;i++){
	    			dofile(files[i],parent+file.getName()+"/");
	    		}
    		}
    	}else if(!file.isHidden()){
    		try {
    			MessageDigest md = MessageDigest.getInstance("MD5");
				FileInputStream input = new FileInputStream(file);
				byte[] bytes = new byte[(int)file.length()];
				input.read(bytes);
	    		byte[] md5bytes = md.digest(bytes);
	    		BASE64Encoder b64e = new BASE64Encoder();
	    		System.out.println(parent+file.getName()+","+b64e.encode(md5bytes)+","+file.length());
    		}catch (Exception ex) {
				ex.printStackTrace();
			}
    	}
    }
}
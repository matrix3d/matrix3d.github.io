import java.io.BufferedReader;
import java.io.File;
import java.io.FileFilter;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 
 */

/**
 * @author Administrator
 *
 */
public class flash {

	/**
	 * @param args
	 * @throws IOException
	 */
	public static void main(String[] args) throws IOException {
		if(args==null||args.length<3){
			System.out.println("input 1 flashlib 2 outputfile 3 outpub class name");
			return;
		}
		code="package utils \n"+
"{\n"+
	"public class "+args[2]+"\n"+ 
	"{\n";
		File filedir = new File(args[0]);
		execdir(filedir);
		code+="}}";
		
		FileOutputStream output = new FileOutputStream(new File(args[1]));
		output.write(code.getBytes());
		output.close();
	}
	
	public static String code; 
	
	public static void execdir(File filedir) throws IOException{
		if(filedir.isDirectory()){
			File[] files = filedir.listFiles(new FileFilter() {
				@Override
				public boolean accept(File arg0) {
					if(arg0.isDirectory())return true;
					return Pattern.matches(".*\\.xml",arg0.getName());
				}
			});
			for(int i =0 ;i<files.length;i++){
				File file = files[i];
				execdir(file);
			}
		}else{
			FileReader reader = new FileReader(filedir);
			BufferedReader bufferedReader = new BufferedReader(reader);
			Pattern p = Pattern.compile("linkageClassName=\"(.*?)\""); 
			String str=bufferedReader.readLine();
			Matcher matcher;
			if (str  != null) {
				matcher = p.matcher(str);
				if(matcher.find()){
					System.out.println(matcher.group(0)+":"+matcher.group(1));
					code+=matcher.group(1)+";\n";
				}
			}
			bufferedReader.close();
			reader.close();
		}
	}
	

}

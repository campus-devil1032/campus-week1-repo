import java.util.Scanner;

public class MyFirstClass {
	
	static void mulTipleCalc(int x) {
		 for (int i = x; i <= x; i++) {
		    	for (int j = 1; j < 10; j++) {
		    		System.out.printf("%d�� %d * %d = %d%n", i, i, j, i * j);
		    	}
		    }
	}
	
	public static void main(String[] args) {
		// �������� ����ϴ� �ڵ带 �ϳ�
		// 1�ܺ��� 9�� ���� ����Ѵ�.
		// Optional: �������� �� ���� �Է¹޴´�.
		//				�̰�� 1 ~ 999���� �Է¸� ��ȣ�ϰ� ����ó���� �Ѵ�.
		// Optional: ����Ͻ� ���� �и� �غ�����. view �ܰ� ����Ͻ� ���� Ŭ������ ���� �����ؼ� �и��غ�����.

		Scanner number = new Scanner(System.in);  // Create a Scanner object
	    System.out.println("�Է��� ������ �ܼ��� �Է��ϼ���.");
	    String inputNumber = number.nextLine();
	    int intNumber = Integer.parseInt(inputNumber);
	    
	    mulTipleCalc(intNumber);
	   
	    
	    
	//	
//		for (int i = 1; i < 10; i++) {
//			System.out.println(i);
//			for (int j = 1; j < 10; j++) {
//				System.out.printf("%d��  %d*%d = %d%n", i, i, j, i * j);
//			}
//		}
//		
		
		
		

	}
}

import java.util.Scanner;

public class MyFirstClass {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.println("���ڸ� �Է��ϼ���(1~999)");

		if (sc.hasNextInt()) {
			int inputNum = sc.nextInt();

			if (inputNum < 1 || inputNum > 999) {	// �Է� ���� ������ ��� ���
				System.out.println("1���� 999 ������ ������ �Է��ϼ���.");
				return;
			}

			System.out.println(inputNum + "���� ����մϴ�.");

			for (int i = 0; i < 10; i++) {	// �Է� ���� 1~9�ܱ��� ���
				System.out.println(inputNum + " x " + i + " = " + (inputNum * i));
			}
			
		} else {	//�Է� ���� ������ �ƴ� ���
			System.out.println("������ �Է��ϼ���");
		}

	}


}

public class GugudanTable {

    int number;

    public GugudanTable(int number) {
        this.number = number;
    }

    public void print() {
        for (int i = 1; i <= 9; i++) {
            System.out.println(number + " X " + i + " = " + number * i);
        }

    }
}

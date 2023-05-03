package com.example.gugudan;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class GugudanApplication {

    public static void main(String[] args) {

        for(int i=1;i<=9;i++){
            for(int j=1;j<=9;j++){
                System.out.println(i + " * " + j + " = "+ i*j);
            }
        }

        Scanner in = new Scanner(System.in); // Scanner 객체 생성

        System.out.println("a값을 입력하세요");
        int a = in.nextInt();
        System.out.println("b값을 입력하세요");
        int b = in.nextInt();

        System.out.println(a + " * " + b + " = " + a*b);
    }
}

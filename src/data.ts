import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Trong mặt phẳng $Oxy$, cho $A(1; 2)$ và $B(3; 4)$. Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là:",
    options: ["$(4; 6)$", "$(2; 3)$", "$(1; 1)$", "$(2; 2)$"],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Cho tam giác $ABC$ có $A(1; 1), B(0; -2), C(2; 4)$. Tọa độ trọng tâm $G$ của tam giác là:",
    options: ["$(1; 1)$", "$(3; 3)$", "$(1; 3)$", "$(1; 0)$"],
    correctAnswer: 0
  },
  {
    id: 3,
    text: "Vectơ nào dưới đây là một vectơ chỉ phương của đường thẳng $d: \\begin{cases} x = 2 + t \\\\ y = -3 + 2t \\end{cases}$?",
    options: ["$\\vec{u} = (2; -3)$", "$\\vec{u} = (1; 2)$", "$\\vec{u} = (2; 1)$", "$\\vec{u} = (-3; 2)$"],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Vectơ pháp tuyến của đường thẳng $d: 2x - 3y + 5 = 0$ là:",
    options: ["$\\vec{n} = (2; 3)$", "$\\vec{n} = (3; 2)$", "$\\vec{n} = (2; -3)$", "$\\vec{n} = (-3; 2)$"],
    correctAnswer: 2
  },
  {
    id: 5,
    text: "Nếu đường thẳng có vectơ chỉ phương $\\vec{u} = (a; b)$ thì vectơ pháp tuyến $\\vec{n}$ có thể là:",
    options: ["$(b; a)$", "$(-b; a)$", "$(a; -b)$", "$(-a; -b)$"],
    correctAnswer: 1
  },
  {
    id: 6,
    text: "Phương trình đường thẳng đi qua $M(1; -2)$ và có vectơ pháp tuyến $\\vec{n} = (3; 4)$ là:",
    options: ["$3x + 4y + 5 = 0$", "$3x + 4y - 5 = 0$", "$3x - 4y + 5 = 0$", "$4x - 3y - 10 = 0$"],
    correctAnswer: 0
  },
  {
    id: 7,
    text: "Khoảng cách từ điểm $M(1; 1)$ đến đường thẳng $\\Delta: 3x + 4y + 3 = 0$ là:",
    options: ["1", "2", "10", "$2\\sqrt{5}$"],
    correctAnswer: 1
  },
  {
    id: 8,
    text: "Góc giữa hai đường thẳng $d_1: x + 2y - 1 = 0$ và $d_2: x - 3y + 3 = 0$ là:",
    options: ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"],
    correctAnswer: 1
  },
  {
    id: 9,
    text: "Hai đường thẳng $d_1: 2x - y + 1 = 0$ và $d_2: x + 2y - 3 = 0$ có vị trí tương đối là:",
    options: ["Song song", "Trùng nhau", "Vuông góc", "Cắt nhau nhưng không vuông góc"],
    correctAnswer: 2
  },
  {
    id: 10,
    text: "Phương trình tham số của đường thẳng đi qua $A(1; 2)$ và $B(3; 5)$ là:",
    options: ["$\\begin{cases} x = 1 + 2t \\\\ y = 2 + 3t \\end{cases}$", "$\\begin{cases} x = 3 + 2t \\\\ y = 5 + 2t \\end{cases}$", "$\\begin{cases} x = 1 + 3t \\\\ y = 2 + 5t \\end{cases}$", "$\\begin{cases} x = 2 + t \\\\ y = 3 + 2t \\end{cases}$"],
    correctAnswer: 0
  },
  {
    id: 11,
    text: "Phương trình đường tròn tâm $I(2; -3)$ bán kính $R = 4$ là:",
    options: ["$(x-2)^2 + (y+3)^2 = 4$", "$(x+2)^2 + (y-3)^2 = 16$", "$(x-2)^2 + (y+3)^2 = 16$", "$(x-2)^2 + (y-3)^2 = 16$"],
    correctAnswer: 2
  },
  {
    id: 12,
    text: "Tâm $I$ và bán kính $R$ của đường tròn $(x+1)^2 + (y-2)^2 = 9$ là:",
    options: ["$I(-1; 2), R=3$", "$I(1; -2), R=3$", "$I(-1; 2), R=9$", "$I(1; -2), R=9$"],
    correctAnswer: 0
  },
  {
    id: 13,
    text: "Đường tròn $x^2 + y^2 - 2x + 4y - 4 = 0$ có tâm là:",
    options: ["$(1; -2)$", "$(-1; 2)$", "$(2; -4)$", "$(-2; 4)$"],
    correctAnswer: 0
  },
  {
    id: 14,
    text: "Bán kính của đường tròn $x^2 + y^2 - 4x + 6y = 0$ là:",
    options: ["$\\sqrt{13}$", "13", "$\\sqrt{5}$", "5"],
    correctAnswer: 0
  },
  {
    id: 15,
    text: "Phương trình nào sau đây không phải là phương trình đường tròn?",
    options: ["$x^2 + y^2 - 2x - 2y + 1 = 0$", "$x^2 + y^2 - 4x - 6y + 15 = 0$", "$x^2 + y^2 + 8x = 0$", "$2x^2 + 2y^2 - 4x + 8y - 2 = 0$"],
    correctAnswer: 1
  },
  {
    id: 16,
    text: "Đường tròn tâm $I(1; 2)$ tiếp xúc với trục $Ox$ có bán kính bằng:",
    options: ["1", "2", "5", "$\\sqrt{5}$"],
    correctAnswer: 1
  },
  {
    id: 17,
    text: "Phương trình tiếp tuyến của đường tròn $x^2 + y^2 = 5$ tại điểm $M(1; 2)$ là:",
    options: ["$x + 2y - 5 = 0$", "$x + 2y + 5 = 0$", "$2x + y - 5 = 0$", "$x - 2y + 3 = 0$"],
    correctAnswer: 0
  },
  {
    id: 18,
    text: "Khoảng cách từ tâm đường tròn $(x-1)^2 + (y-3)^2 = 4$ đến trục $Oy$ là:",
    options: ["1", "3", "2", "4"],
    correctAnswer: 0
  },
  {
    id: 19,
    text: "Đường tròn đường kính $AB$ với $A(1; 1), B(3; 3)$ có tâm là:",
    options: ["$(2; 2)$", "$(4; 4)$", "$(1; 1)$", "$(3; 3)$"],
    correctAnswer: 0
  },
  {
    id: 20,
    text: "Vị trí tương đối của điểm $M(1; 1)$ so với đường tròn $x^2 + y^2 = 4$ là:",
    options: ["Nằm trên đường tròn", "Nằm ngoài đường tròn", "Nằm trong đường tròn", "Trùng với tâm đường tròn"],
    correctAnswer: 2
  },
  {
    id: 31,
    text: "Khai triển biểu thức $(x + 1)^4$ theo công thức nhị thức Newton là:",
    options: ["$x^4 + 4x^3 + 6x^2 + 4x + 1$", "$x^4 + x^3 + x^2 + x + 1$", "$x^4 + 2x^2 + 1$", "$x^4 + 4x^3 + 4x^2 + 4x + 1$"],
    correctAnswer: 0
  },
  {
    id: 32,
    text: "Hệ số của $x^2$ trong khai triển $(x + 2)^5$ là:",
    options: ["$C_5^2$", "$C_5^2 \\cdot 2^3$", "$C_5^3 \\cdot 2^2$", "$C_5^3 \\cdot 2^3$"],
    correctAnswer: 3
  },
  {
    id: 33,
    text: "Tổng các hệ số trong khai triển $(3x - 1)^4$ là:",
    options: ["16", "81", "1", "0"],
    correctAnswer: 0
  },
  {
    id: 34,
    text: "Số hạng không chứa $x$ trong khai triển $(x + \\frac{1}{x})^4$ là:",
    options: ["4", "6", "1", "$C_4^3$"],
    correctAnswer: 1
  },
  {
    id: 35,
    text: "Số các số hạng trong khai triển nhị thức Newton $(a + b)^n$ là:",
    options: ["$n$", "$n - 1$", "$n + 1$", "$2n$"],
    correctAnswer: 2
  },
  {
    id: 36,
    text: "Trong khai triển $(2x - y)^5$, số hạng thứ 3 (theo số mũ giảm dần của $x$) là:",
    options: ["$C_5^2 \\cdot (2x)^3 \\cdot (-y)^2$", "$C_5^3 \\cdot (2x)^2 \\cdot (-y)^3$", "$C_5^2 \\cdot (2x)^2 \\cdot (-y)^3$", "$C_5^3 \\cdot (2x)^3 \\cdot y^2$"],
    correctAnswer: 0
  },
  {
    id: 37,
    text: "Tìm hệ số của $x^3$ trong khai triển $(1 - 3x)^4$:",
    options: ["108", "-108", "27", "-27"],
    correctAnswer: 1
  },
  {
    id: 38,
    text: "Khai triển $(x + 2)^n$ có hệ số của số hạng thứ hai là 20. Giá trị của $n$ là:",
    options: ["$n=5$", "$n=10$", "$n=20$", "$n=40$"],
    correctAnswer: 1
  },
  {
    id: 39,
    text: "Công thức nào sau đây đúng với khai triển $(a-b)^4$?",
    options: ["$a^4 - 4a^3b + 6a^2b^2 - 4ab^3 + b^4$", "$a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$", "$a^4 - 4a^3b - 6a^2b^2 - 4ab^3 + b^4$", "$a^4 - b^4$"],
    correctAnswer: 0
  },
  {
    id: 40,
    text: "Trong khai triển $(x + 3)^5$, hệ số của số hạng chứa $x^4$ là:",
    options: ["5", "15", "405", "1"],
    correctAnswer: 1
  },
  {
    id: 41,
    text: "Phương trình chính tắc của Elip có độ dài trục lớn bằng 10 và độ dài trục nhỏ bằng 6 là:",
    options: ["$\\frac{x^2}{100} + \\frac{y^2}{36} = 1$", "$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$", "$\\frac{x^2}{10} + \\frac{y^2}{6} = 1$", "$\\frac{x^2}{25} - \\frac{y^2}{9} = 1$"],
    correctAnswer: 1
  },
  {
    id: 42,
    text: "Tọa độ các tiêu điểm của Elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$ là:",
    options: ["$F_1(-4; 0), F_2(4; 0)$", "$F_1(0; -4), F_2(0; 4)$", "$F_1(-16; 0), F_2(16; 0)$", "$F_1(-2; 0), F_2(2; 0)$"],
    correctAnswer: 0
  },
  {
    id: 43,
    text: "Phương trình chính tắc của Hypebol có tiêu cự $2c=10$ và độ dài trục thực $2a=8$ là:",
    options: ["$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$", "$\\frac{x^2}{16} + \\frac{y^2}{9} = 1$", "$\\frac{x^2}{25} - \\frac{y^2}{16} = 1$", "$\\frac{x^2}{64} - \\frac{y^2}{36} = 1$"],
    correctAnswer: 0
  },
  {
    id: 44,
    text: "Tiêu điểm của Parabol $(P): y^2 = 8x$ là:",
    options: ["$F(4; 0)$", "$F(8; 0)$", "$F(2; 0)$", "$F(0; 2)$"],
    correctAnswer: 2
  },
  {
    id: 45,
    text: "Đường chuẩn của Parabol $(P): y^2 = 4x$ có phương trình là:",
    options: ["$x = 1$", "$x = -1$", "$y = -1$", "$x = -2$"],
    correctAnswer: 1
  },
  {
    id: 46,
    text: "Cho Elip $(E): \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$. Mối liên hệ giữa $a, b, c$ là:",
    options: ["$c^2 = a^2 + b^2$", "$b^2 = a^2 + c^2$", "$a^2 = b^2 + c^2$", "$a = b + c$"],
    correctAnswer: 2
  },
  {
    id: 47,
    text: "Tâm sai $e$ của Elip luôn thỏa mãn điều kiện nào?",
    options: ["$e > 1$", "$e = 1$", "$0 < e < 1$", "$e = 0$"],
    correctAnswer: 2
  },
  {
    id: 48,
    text: "Một Hypebol có phương trình $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$. Độ dài trục ảo của nó là:",
    options: ["3", "4", "6", "8"],
    correctAnswer: 3
  },
  {
    id: 49,
    text: "Điểm nào sau đây nằm trên Elip $(E): \\frac{x^2}{16} + \\frac{y^2}{9} = 1$?",
    options: ["$(4; 0)$", "$(0; 4)$", "$(3; 0)$", "$(1; 1)$"],
    correctAnswer: 0
  },
  {
    id: 50,
    text: "Khoảng cách từ một điểm $M$ bất kỳ trên Parabol $(P): y^2 = 2px$ đến tiêu điểm $F$ bằng:",
    options: ["Khoảng cách từ $M$ đến đường chuẩn $\\Delta$", "Độ dài tham số $p$", "Tung độ của điểm $M$", "Nửa độ dài trục thực"],
    correctAnswer: 0
  },
  {
    id: 51,
    text: "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố là:",
    options: ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{2}{3}$"],
    correctAnswer: 0
  },
  {
    id: 52,
    text: "Một hộp chứa 3 bi đỏ và 5 bi xanh. Lấy ngẫu nhiên 2 viên bi từ hộp. Số phần tử của không gian mẫu $n(\\Omega)$ là:",
    options: ["8", "15", "28", "56"],
    correctAnswer: 2
  },
  {
    id: 53,
    text: "Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm trên hai mặt xuất hiện bằng 7 là:",
    options: ["$\\frac{1}{12}$", "$\\frac{1}{6}$", "$\\frac{7}{36}$", "$\\frac{1}{36}$"],
    correctAnswer: 1
  },
  {
    id: 54,
    text: "Tung một đồng xu cân đối 3 lần liên tiếp. Số phần tử của biến cố 'Có ít nhất một lần xuất hiện mặt ngửa' là:",
    options: ["4", "3", "7", "8"],
    correctAnswer: 2
  },
  {
    id: 55,
    text: "Cho $A$ là một biến cố liên quan đến phép thử. Khẳng định nào sau đây là sai?",
    options: ["$P(A) = 0$ nếu $A$ là biến cố không thể.", "$P(A) = 1$ nếu $A$ là biến cố chắc chắn.", "$0 \\le P(A) \\le 1$.", "$P(A) > 1$ nếu không gian mẫu quá lớn."],
    correctAnswer: 3
  },
  {
    id: 56,
    text: "Một túi chứa 10 tấm thẻ được đánh số từ 1 đến 10. Rút ngẫu nhiên một thẻ. Xác suất để rút được thẻ ghi số chia hết cho 3 là:",
    options: ["0,3", "0,2", "0,4", "0,5"],
    correctAnswer: 0
  },
  {
    id: 57,
    text: "Có 5 bông hoa hồng khác nhau và 3 bông hoa cúc khác nhau. Chọn ngẫu nhiên 2 bông hoa. Xác suất để chọn được 2 bông hoa cùng loại là:",
    options: ["$\\frac{13}{28}$", "$\\frac{15}{28}$", "$\\frac{1}{2}$", "$\\frac{11}{28}$"],
    correctAnswer: 0
  },
  {
    id: 58,
    text: "Gọi $\\bar{A}$ là biến cố đối của biến cố $A$. Công thức nào sau đây đúng?",
    options: ["$P(A) = 1 + P(\\bar{A})$", "$P(A) + P(\\bar{A}) = 1$", "$P(A) = P(\\bar{A})$", "$P(A) \\cdot P(\\bar{A}) = 1$"],
    correctAnswer: 1
  },
  {
    id: 59,
    text: "Một tổ học sinh có 6 nam và 4 nữ. Chọn ngẫu nhiên 3 em đi trực nhật. Xác suất để trong 3 em được chọn có đúng 2 nam là:",
    options: ["$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{3}{10}$", "$\\frac{1}{4}$"],
    correctAnswer: 0
  },
  {
    id: 60,
    text: "Gieo một con xúc xắc. Gọi $A$ là biến cố 'Số chấm xuất hiện là số lẻ', $B$ là biến cố 'Số chấm xuất hiện lớn hơn 3'. Biến cố giao $A \\cap B$ là tập hợp nào?",
    options: ["$\\{1, 3, 5\\}$", "$\\{5\\}$", "$\\{4, 5, 6\\}$", "$\\{1, 3, 4, 5, 6\\}$"],
    correctAnswer: 1
  }
];

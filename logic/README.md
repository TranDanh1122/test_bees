# Logic Test - BEES Group

Đây là bài Logic Test (Câu 1) của BEES Group, triển khai hàm `processWithDelayV2` xử lý mảng số với delay, hỗ trợ pause/resume/cancel và progress tracking.

## Tính năng
- **Core**:  
  - Xử lý mảng số, delay 1 giây giữa mỗi số, in ra console.  
  - Trả về `Promise` (resolve khi xong).  
  - Xử lý mảng rỗng (resolve ngay).  
  - Throw error nếu input không hợp lệ (non-array, non-numeric).  
- **Bonus**:  
  - Delay tùy chỉnh (tham số `delay`).  
  - Pause/resume: Dừng và tiếp tục xử lý.  
  - Cancel: Hủy toàn bộ quá trình đang chạy bằng `clearTimeout`.  
  - Progress tracking: Cập nhật `<progress>` và hiển thị trên console log.  
- **Giao diện (bonus)**:  
  - Thêm giao diện HTML với `<progress>`, nút pause/resume/cancel.  
  - CSS đơn giản.  

## Công nghệ
- **Ngôn ngữ**: TypeScript  
- **Giao diện**: HTML, CSS  

## Cách chạy  
1. Biên dịch TypeScript: `tsc logic.ts`
2. Mở file `index.html` trong trình duyệt (dùng Live Server nếu có).  
   - Giao diện sẽ hiển thị thanh `<progress>` và các nút pause/resume/cancel.  
   - Mở console để xem kết quả in số.  

## Ghi chú 
- Ban đầu thử đệ quy (`processWithDelayV1`), nhưng không làm pause được, nên chuyển sang vòng lặp (`V2`).  

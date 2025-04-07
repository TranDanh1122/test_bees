# App Development Test - BEES Group

Đây là bài App Development Test (Câu 2) của BEES Group, triển khai bảng quản lý users với phân trang, sort, filter, dark mode, và virtualization.

## Tính năng
- **Core**:  
  - Bảng users đa trang (mặc định 10 rows, người dùng đổi được: 10, 20, 30).  
  - Balance: Có dấu phân cách nghìn, thêm “$” (ví dụ: $261.00).  
  - Email: Link click được (`mailto:`).  
  - Registration: Format “yyyy-MM-dd”, hover hiện chi tiết (giờ, giây) qua tooltip.  
  - Dữ liệu: Tối thiểu 100 rows (dùng DummyJSON).  
- **Bonus**:  
  - Sort: Sort theo name (ascending/descending).  
  - Filter: Search theo name, filter theo status (Active/Inactive).  
  - Dark mode: Toggle dark/light mode.  
  - Virtualization: Chuyển chế độ view (table/infinite scroll) bằng `react-window-infinite-loader`.  
  - Fetch API: Dùng DummyJSON (`https://dummyjson.com/users`).  
  - Loading spinner: Hiển thị khi fetch API (dùng Shadcn UI `Spinner`).  
  - Error handling: Thông báo lỗi nếu fetch thất bại (dùng Shadcn UI `Toast`).  
- **Giao diện**:  
  - Responsive design (TailwindCSS).  
  - Bảng có UI, có phân trang, sort, filter, dark mode toggle.  

## Công nghệ
- **Framework**: React  
- **Ngôn ngữ**: TypeScript  
- **UI**: TailwindCSS, Shadcn UI  
- **API**: Axios, React Query  
- **State Management**: Context (theme, layout), useReducer (phân trang, sort, filter)  
- **Virtualization**: `react-window-infinite-loader`  

## Cách chạy
1. Cài đặt dependencies: `npm install`  
2. Chạy ứng dụng: `npm run dev`  
3. Mở trình duyệt: `http://localhost:5173`  
   - Xem bảng users, thử phân trang, sort, filter, dark mode.
   - Chuyển viewmode, thử infinite scroll
   - Chuyển theme mode : light/dark
   - Kiểm tra loading state (SkeletonUI) và error message khi fetch API.  

## Ghi chú  
- Không dùng Redux vì chỉ có 1 màn hình, không cần state global – dùng `useReducer` và Context để quản lý state.  
- Tự viết custom hook debounce, không dùng thư viện.  
- Giao diện responsive, tối ưu UX (sort, filter, dark mode).  
- Nếu có thể, hãy xem các comment, sẽ giải thích mọi thứ rõ ràng hơn
- Cấu trúc source được phân theo features/pages, phù hợp để triển khai `react-router-dom` sau này

## Demo
- Mở `[Demo Vercel](https://test-bees.vercel.app/)` để xem tính năng mà không cần cài đặt.  
- Thử các tính năng:  
  - Search theo name, filter theo status.  
  - Sort theo name, email, balance (asc/desc).  
  - Chuyển dark/light mode.  
  - Chuyển view mode (table/infinite scroll).  
  - Hover cột Registration để xem giờ, giây.  


import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20 px-4 mt-20">

            <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                ۴۰۴
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold text-white mt-6">
                صفحه مورد نظر پیدا نشد!
            </h2>

            <p className="text-gray-400 max-w-md mt-4 leading-8">
                متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد،
                ممکن است آدرس آن تغییر کرده باشد یا صفحه حذف شده باشد.
            </p>

            <Link
                to="/"
                className="mt-8 px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300"
            >
                بازگشت به صفحه اصلی
            </Link>

        </div>
    );
}

export default NotFound;

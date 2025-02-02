import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
      <p class="font-semibold">Trimit – By <span class="text-blue-500">Ruchir Rao</span></p>
      <p class="mt-2">🔗 Follow me on </p>
      <p class="mt-3 flex justify-center space-x-4">
        
        <a href="https://www.linkedin.com/in/ruchir-r-0b87a0283/" target="_blank" class="text-blue-500 hover:text-blue-700">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.62 2.01 3.62 4.62v5.58z"/>
            </svg>
        </a>
        <a href="https://github.com/RuchirR02" target="_blank" class="text-gray-100 hover:text-gray-400">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .296c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.611-4.042-1.611-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.762-1.605-2.665-.302-5.466-1.332-5.466-5.93 0-1.311.469-2.382 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.005.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.241 2.873.118 3.176.769.838 1.233 1.909 1.233 3.22 0 4.608-2.807 5.625-5.478 5.922.43.37.814 1.102.814 2.222 0 1.606-.015 2.897-.015 3.293 0 .319.192.693.799.576 4.765-1.587 8.2-6.083 8.2-11.383 0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>
      </p>
      </div>
    </div>
  );
};

export default AppLayout;

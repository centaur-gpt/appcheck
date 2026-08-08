import React, { useState } from 'react';
import { Search, Bell, MapPin, Home, Heart, Map as MapIcon, User } from 'lucide-react';
import { CATEGORIES, MOCK_OFFERS, Category } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'favorites' | 'map' | 'profile'>('home');
  const [activeCategory, setActiveCategory] = useState<Category>('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOffers = MOCK_OFFERS.filter(offer => 
    (activeCategory === 'Все' || offer.category === activeCategory) &&
    offer.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f2f4f7] w-full h-screen flex items-center justify-center font-sans overflow-hidden">
      <div className="w-full md:w-[375px] h-[100dvh] md:h-[760px] bg-white md:shadow-2xl md:rounded-[44px] md:border-[12px] border-slate-900 overflow-hidden relative flex flex-col">
        {/* Notch */}
        <div className="hidden md:block h-6 w-1/3 bg-slate-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-50"></div>
        
        {/* Only show home content if activeTab is 'home' */}
        {activeTab === 'home' ? (
          <>
            {/* Header */}
            <header className="pt-12 md:pt-10 px-5 pb-4 bg-white border-b border-gray-100 flex-none z-20">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                  Moscow<span className="text-[#ed1c24]">Sale</span>
                </h1>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors relative">
                    <Bell size={20} className="text-slate-900" />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#ed1c24] border-2 border-white rounded-full"></span>
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                  <Search size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  className="w-full bg-gray-100 border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#ed1c24] outline-none transition-all"
                  placeholder="Поиск скидок, мест..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </header>

            {/* Categories */}
            <div className="px-5 py-4 flex space-x-3 overflow-x-auto hide-scrollbar flex-none bg-white">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="flex flex-col items-center space-y-1 min-w-[60px]"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-[#ed1c24] text-white shadow-lg shadow-red-100' 
                        : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                    }`}>
                      {cat.icon || <span className="font-bold text-sm">All</span>}
                    </div>
                    <span className={`text-[10px] ${isActive ? 'font-bold text-slate-900' : 'font-medium text-gray-500'}`}>
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Feed */}
            <main className="flex-1 bg-gray-50 p-4 space-y-4 overflow-y-auto relative z-0 pb-20">
              {filteredOffers.length > 0 ? (
                filteredOffers.map((offer) => (
                  <article key={offer.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="relative h-32 w-full bg-gray-200">
                      <img 
                        src={offer.image} 
                        alt={offer.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-white/95 px-2 py-1 rounded-lg text-[10px] font-bold text-red-600 shadow-sm">
                        {offer.discountType}
                      </div>
                      <button className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-[#ed1c24] transition-colors shadow-sm">
                        <Heart size={16} />
                      </button>
                    </div>
                    <div className="p-3 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-bold text-slate-900 leading-tight">{offer.title}</h3>
                        <span className="text-[#ed1c24] font-bold text-xs ml-2">Акция</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mb-2 line-clamp-2">
                        {offer.description}
                      </p>
                      
                      <div className="flex items-center text-[10px] text-gray-400 mb-3 gap-1">
                        <MapPin size={12} strokeWidth={2} className="flex-shrink-0" />
                        <span className="truncate">{offer.address}</span>
                      </div>
                      
                      <button className="w-full bg-slate-900 text-white text-xs font-bold py-2.5 rounded-xl hover:bg-black transition-colors">
                        Получить
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-gray-400 gap-3">
                  <Search size={32} className="opacity-20" />
                  <p className="font-medium text-sm">Ничего не найдено</p>
                </div>
              )}
            </main>
          </>
        ) : (
          /* Placeholder for other tabs */
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-6 text-center h-full">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-4 text-gray-400">
              {activeTab === 'favorites' && <Heart size={28} />}
              {activeTab === 'map' && <MapIcon size={28} />}
              {activeTab === 'profile' && <User size={28} />}
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2 capitalize">
              {activeTab === 'favorites' ? 'Избранное' : activeTab === 'map' ? 'Карта' : 'Профиль'}
            </h2>
            <p className="text-[11px] text-gray-500 max-w-[200px]">
              Раздел в разработке.
            </p>
          </div>
        )}

        {/* Bottom Navigation */}
        <nav className="h-20 bg-white border-t border-gray-100 flex items-center justify-around px-4 flex-none pb-4 relative z-30">
          <button 
            onClick={() => setActiveTab('home')}
            className="flex flex-col items-center space-y-1 w-16"
          >
            <Home size={24} strokeWidth={2} color={activeTab === 'home' ? '#ed1c24' : '#94a3b8'} className={activeTab === 'home' ? 'fill-[#ed1c24]/10' : ''} />
            <span className={`text-[10px] ${activeTab === 'home' ? 'font-bold text-[#ed1c24]' : 'font-medium text-slate-400'}`}>Главная</span>
          </button>
          <button 
            onClick={() => setActiveTab('favorites')}
            className="flex flex-col items-center space-y-1 w-16"
          >
            <Heart size={24} strokeWidth={2} color={activeTab === 'favorites' ? '#ed1c24' : '#94a3b8'} className={activeTab === 'favorites' ? 'fill-[#ed1c24]/10' : ''} />
            <span className={`text-[10px] ${activeTab === 'favorites' ? 'font-bold text-[#ed1c24]' : 'font-medium text-slate-400'}`}>Избранное</span>
          </button>
          <button 
            onClick={() => setActiveTab('map')}
            className="flex flex-col items-center space-y-1 w-16"
          >
            <MapIcon size={24} strokeWidth={2} color={activeTab === 'map' ? '#ed1c24' : '#94a3b8'} className={activeTab === 'map' ? 'fill-[#ed1c24]/10' : ''} />
            <span className={`text-[10px] ${activeTab === 'map' ? 'font-bold text-[#ed1c24]' : 'font-medium text-slate-400'}`}>Карта</span>
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className="flex flex-col items-center space-y-1 w-16"
          >
            <User size={24} strokeWidth={2} color={activeTab === 'profile' ? '#ed1c24' : '#94a3b8'} className={activeTab === 'profile' ? 'fill-[#ed1c24]/10' : ''} />
            <span className={`text-[10px] ${activeTab === 'profile' ? 'font-bold text-[#ed1c24]' : 'font-medium text-slate-400'}`}>Профиль</span>
          </button>
        </nav>
        
        {/* iOS Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-200 rounded-full hidden md:block z-40"></div>
      </div>
    </div>
  );
}

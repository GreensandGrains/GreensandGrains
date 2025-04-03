
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function GamePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ 
            type: "spring",
            damping: 30,
            stiffness: 300,
            mass: 0.8
          }}
          className="fixed bottom-8 left-0 right-0 mx-auto max-w-md px-4 z-50"
        >
          <motion.div 
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-green-200/50 overflow-hidden"
            initial={{ scale: 0.9, rotateX: 40 }}
            animate={{ scale: 1, rotateX: 0 }}
            whileHover={{ scale: 1.02, translateY: -4 }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              bounce: 0.2
            }}
          >
            <div className="relative p-6">
              <motion.button 
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 p-2 hover:bg-red-100 rounded-full transition-colors"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <X className="w-5 h-5 text-red-500" />
              </motion.button>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.div
                  className="relative w-24 h-24 flex-shrink-0"
                  animate={{ 
                    rotate: [0, -5, 5, -5, 0],
                    y: [0, -4, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src="https://media-hosting.imagekit.io/493a286221544ab5/WhatsApp_Image_2025-04-03_at_4.21.00_PM-removebg-preview.png?Expires=1838292074&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g090XsISZgac2Qna6wxII2IC8MOrEizum-XpxJnOAOvwBAGYVqdECejtAzsHzEvsdxXuR8RQHnwcZybpX-MHl099jhhtUqOhPzoR~RflxdMQ0H5BfTWLMt2MB2HRBZDGdmWN4gk~uKE~kw1vLcvlvTdAr8p8KvGonTb4Vk21-2AZxvmWJlBtzn5zaHBVNEd9kgdl47c-FIyytpLR7dEepVePfAA~EZCZ6PGQPwGjQsMsc6xULevmAJ6Cao5FbmTybYOvOjbKpowVm~firB8QWBPgc5BtF-9rv6oBjZacwXHpFszhYYD7cv6YH8-QLA8MZ92AbprbsE68yYv87QG~Cw__"
                    alt="Fun 2 Play"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <motion.h3 
                    className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Fun 2 Play
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Experience the ultimate family entertainment with arcade games, soft play area, and delicious snacks!
                  </motion.p>
                  <motion.div 
                    className="flex gap-3 justify-center md:justify-start"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Maybe Later
                    </motion.button>
                    <motion.a
                      href="https://maps.app.goo.gl/2tA5yXKfEGyqYcWh8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white rounded-full shadow-lg shadow-green-500/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Us
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

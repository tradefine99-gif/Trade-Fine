import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const INFO = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Boghra Green Town, Sialkot, Pakistan',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+92 331 6131936',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'tradfine99@gmail.com',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours, worldwide',
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      {INFO.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.05] transition-colors duration-300"
        >
          <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
            <item.icon className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="text-[11px] text-gray-500 uppercase font-bold tracking-widest mb-1">
              {item.label}
            </p>
            <p className="text-white text-base font-medium">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;

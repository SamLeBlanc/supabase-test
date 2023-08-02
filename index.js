import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tjpowysgkmnciunvbahz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqcG93eXNna21uY2l1bnZiYWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MzAwNDEsImV4cCI6MjAwNjUwNjA0MX0.tftvmyNUrwNAYAqwdSzVkJSzYuJAX7NYD4imfpClrd4';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const fetchTableData = async () => {
    let { data, error } = await supabase
    .from('test')
    .select('*');
  
  console.log('Data:', data);
  console.log('Error:', error);
  }
  
  fetchTableData();
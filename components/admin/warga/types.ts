export interface Warga {
  id: number;
  nik: string;
  no_kk: string;
  nama: string;
  tempat_lahir: string | null;
  tanggal_lahir: string | null;
  jenis_kelamin: string | null;
  agama: string | null;
  pendidikan: string | null;
  pekerjaan: string | null;
  status_perkawinan: string | null;
  hubungan_keluarga: string | null;
  no_hp: string | null;
  alamat: string | null;
  status: string | null;
  created_at: string;
  updated_at: string;
}
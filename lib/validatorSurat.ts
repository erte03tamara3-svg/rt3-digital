type Surat = {
  nama_lengkap?: string;
  identitas?: string;
  tempat_lahir?: string;
  tanggal_lahir?: string;
  jenis_kelamin?: string;
  agama?: string;
  pekerjaan?: string;
  status_perkawinan?: string;
  alamat?: string;
  jenis_surat?: string;
};

export function validasiSurat(surat: Surat) {
  const errors: string[] = [];

  if (!surat.nama_lengkap?.trim()) {
    errors.push("Nama lengkap wajib diisi.");
  }

  if (!surat.identitas?.trim()) {
    errors.push("NIK wajib diisi.");
  } else if (!/^\d{16}$/.test(surat.identitas.trim())) {
    errors.push("NIK harus terdiri dari 16 digit.");
  }

  if (!surat.tempat_lahir?.trim()) {
    errors.push("Tempat lahir wajib diisi.");
  }

  if (!surat.tanggal_lahir) {
    errors.push("Tanggal lahir wajib diisi.");
  }

  if (!surat.jenis_kelamin?.trim()) {
    errors.push("Jenis kelamin wajib diisi.");
  }

  if (!surat.agama?.trim()) {
    errors.push("Agama wajib diisi.");
  }

  if (!surat.pekerjaan?.trim()) {
    errors.push("Pekerjaan wajib diisi.");
  }

  if (!surat.status_perkawinan?.trim()) {
    errors.push("Status perkawinan wajib diisi.");
  }

  if (!surat.alamat?.trim()) {
    errors.push("Alamat wajib diisi.");
  }

  if (!surat.jenis_surat?.trim()) {
    errors.push("Jenis surat wajib dipilih.");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
<template>
  <div class="container py-5">
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="mb-4 fw-semibold">Daftar Transaksi</h5>

        <div class="table-responsive">
          <table class="table table-bordered table-hover align-middle">
            <thead class="table-primary">
              <tr>
                <th>Nama</th>
                <th>Link Pembayaran</th>
                <th class="text-center">Cancel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cepi</td>
                <td>
                  <a href="#" target="_blank" class="btn btn-sm btn-success">
                    Bayar
                  </a>
                </td>
                <td class="text-center">
                  <button class="btn btn-sm btn-danger">Cancel</button>
                </td>
              </tr>

              <tr>
                <td>Andi</td>
                <td>
                  <a href="#" target="_blank" class="btn btn-sm btn-success">
                    Bayar
                  </a>
                </td>
                <td class="text-center">
                  <button class="btn btn-sm btn-danger">Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

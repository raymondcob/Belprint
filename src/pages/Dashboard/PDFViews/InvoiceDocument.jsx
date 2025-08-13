import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from "../../../assets/BELPRINT-LOGO.png";


// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
    fontFamily: 'Helvetica', // Use a standard font
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottom: '1px solid #3b82f6', // Blue border
    paddingBottom: 10,
  },
  companyInfo: {
    fontSize: 10,
    color: '#4b5563', // Gray text
    textAlign: 'center',
  },
  address: {
    marginTop: 5,
  },
  quoteInfo: {
    fontSize: 12,
    color: '#4b5563',
    marginTop: 5,
  },
  quoteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937', // Dark gray text
  },
  billingdetails:{
    display:'flex',
    flexDirection: 'column',
    padding: 6,

  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '20%',
    borderBottom: '1px solid #e5e7eb', // Light gray border
    padding: 5,
    backgroundColor: '#f3f4f6', // Light gray background
    fontSize: 9,
    fontWeight: 'bold',
    color: '#4b5563',
  },
   tableColHeaderDescription: { // Wider column for description
    width: '40%',
    borderBottom: '1px solid #e5e7eb',
    padding: 5,
    backgroundColor: '#f3f4f6',
    fontSize: 9,
    fontWeight: 'bold',
    color: '#4b5563',
  },
  tableCol: {
    width: '20%',
    borderBottom: '1px solid #e5e7eb',
    padding: 5,
    fontSize: 9,
    color: '#374151', // Medium gray text
  },
   tableColDescription: { // Wider column for description
    width: '40%',
    borderBottom: '1px solid #e5e7eb',
    padding: 5,
    fontSize: 9,
    color: '#374151',
  },
  totals: {
    marginTop: 10,
    alignSelf: 'flex-end',
    width: '40%',
    border: '2px solid #F3F4F6 ' ,
    padding: '8px',
    borderRadius : '10px'
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  totalValue: {
    fontSize: 10,
    color: '#1f2937',
  },
  grandTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    borderTop: '1px solid #e5e7eb',
    paddingTop: 5,
  },
  grandTotalLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  grandTotalValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2563eb', // Blue text
  },
   contactInfo: {
    fontSize: 9,
    color: '#374151',
    marginTop: 15,
     borderTop: '1px solid #3b82f6', // Blue border
    paddingTop: 10,
  },
   notesAndPayment: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginTop: 15,
     fontSize: 9,
     color: '#374151',
   },
   notesSection: {
     width: '48%', // Adjust width as needed
   },
    paymentDetailsSection: {
     width: '48%', // Adjust width as needed
   }
});

const InvoiceDocument = ({ invoiceData }) => {
    // Calculate totals
    const subtotal = invoiceData.items.reduce((sum, item) => sum + (item.qty || 0) * (item.unitPrice || 0), 0);
    const gst = subtotal * 0.125;
    const total = subtotal + gst;

    return (
        <Document title={`${invoiceData.id}`}>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                      <Image src={Logo} style={{ width: 85, height: 'auto' }} /> 
                    
                     <View style={styles.companyInfo}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#1f2937' }}>Belprint</Text>
                        <Text style={styles.address}>Seagull Street, San Pedro Belize</Text>
                        <Text>+501-628-8081</Text>
                        <Text>info@belprint.bz</Text>
                     </View>
                     <View style={{padding:10}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#1f2937',marginBottom:5 }}>INVOICE</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#1f2937',marginBottom:5 }}>#{invoiceData.id}</Text>
                        <Text style={{ fontSize: 12, color: '#1f2937' }} >Date: {invoiceData.date}</Text>
                     </View>
                    
                </View >
                <View style ={styles.BillingDetails}>
                    <Text style={{  fontSize: 13, color: '#1f2937',marginBottom:9 }}>Billed To : </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 10,marginBottom:2}}>{invoiceData.customer} </Text>
                    <Text style={{fontSize: 10,marginBottom:5 }}>{invoiceData.email} </Text>
                    <Text style={{ fontSize: 10,marginBottom:10 }}>{invoiceData.phone} </Text>
                </View>
                
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>Item</Text>
                        <Text style={styles.tableColHeader}>Qty</Text>
                        <Text style={styles.tableColHeader}>Unit Price</Text>
                        <Text style={styles.tableColHeader}>Total</Text>
                    </View>
                    {invoiceData.items.map((item, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={styles.tableCol}>{(item.item)}</Text>
                            <Text style={styles.tableCol}>{(item.qty || 0)}</Text>
                            <Text style={styles.tableCol}>${(item.unitPrice || 0).toFixed(2)}</Text>
                            <Text style={styles.tableCol}>${((item.qty || 0) * (item.unitPrice || 0)).toFixed(2)}</Text>
                        </View>
                    ))}
                </View>

                 <View style={styles.totals}>
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Subtotal:</Text>
                        <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
                    </View>
                     <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>GST (12.5%):</Text>
                        <Text style={styles.totalValue}>${gst.toFixed(2)}</Text>
                    </View>
                    <View style={styles.grandTotalRow}>
                        <Text style={styles.grandTotalLabel}>Total:</Text>
                        <Text style={styles.grandTotalValue}>${total.toFixed(2)}</Text>
                    </View>
                 </View>


            </Page>
        </Document>
    );
};



export default InvoiceDocument
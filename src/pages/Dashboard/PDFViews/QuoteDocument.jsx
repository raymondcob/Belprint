import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import BelprintLogoBlack from "../../../assets/BELPRINT-LOGO.svg"; // Adjust path as needed

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
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#1f2937',
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

const QuoteDocument = ({ quoteData }) => {
    // Calculate totals
    const subtotal = quoteData.items.reduce((sum, item) => sum + (item.qty || 0) * (item.unitCost || 0), 0);
    const gst = subtotal * 0.125;
    const total = subtotal + gst;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.quoteTitle}>Quote {quoteData.id}</Text>
                        <Text style={styles.quoteInfo}>Date: {quoteData.date}</Text>
                        <Text style={styles.quoteInfo}>Wanted Date: {quoteData.wantedDate}</Text>
                    </View>
                     <View style={styles.companyInfo}>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#1f2937' }}>Belprint</Text>
                        <Text>TIN #344456</Text>
                        <Text style={styles.address}>#13 Seagull Street</Text>
                        <Text>San Pedro, Ambergris Caye</Text>
                        <Text>Belize</Text>
                     </View>
                    <View>
                         <Text style={[styles.quoteTitle, {textAlign: 'right'}]}>To</Text>
                         <Text style={[styles.quoteInfo, { fontWeight: 'bold', color: '#1f2937' }]}>{quoteData.customer}</Text>
                         <Text style={[styles.quoteInfo, {textAlign: 'right'}]}>{quoteData.email}</Text>
                         <Text style={[styles.quoteInfo, {textAlign: 'right'}]}>{quoteData.location}</Text>
                    </View>
                     {/* <Image src={BelprintLogoBlack} style={{ width: 80, height: 'auto' }} /> {/* Add your logo */}
                </View>

                <Text style={styles.sectionTitle}>Items:</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>Qty</Text>
                        <Text style={styles.tableColHeaderDescription}>Description</Text>
                        <Text style={styles.tableColHeader}>Size</Text>
                        <Text style={styles.tableColHeader}>Unit Cost</Text>
                        <Text style={styles.tableColHeader}>Line Total</Text>
                    </View>
                    {quoteData.items.map((item, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={styles.tableCol}>{(item.qty || 0)}</Text>
                            <Text style={styles.tableColDescription}>{item.description}</Text>
                            <Text style={styles.tableCol}>{item.size}</Text>
                            <Text style={styles.tableCol}>${(item.unitCost || 0).toFixed(2)}</Text>
                            <Text style={styles.tableCol}>${((item.qty || 0) * (item.unitCost || 0)).toFixed(2)}</Text>
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

                <View style={styles.notesAndPayment}>
                   <View style={styles.notesSection}>
                     <Text style={styles.sectionTitle}>Notes:</Text>
                     <Text>{quoteData.notes}</Text>
                   </View>
                    <View style={styles.paymentDetailsSection}>
                     <Text style={styles.sectionTitle}>Payment Details:</Text>
                     <Text>{quoteData.paymentDetails}</Text>
                   </View>
                </View>


                <Text style={styles.contactInfo}>
                    Contact Information: Email: sale@belprint.com | Location: #13 Seagull Street | Phone Number: +501-628-8081
                </Text>

            </Page>
        </Document>
    );
};

export default QuoteDocument;

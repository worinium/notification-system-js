<template>
  <div>
    <b-list-group-item>
      <b-avatar href="#foo" variant="primary" text="NS" class="align-baseline"></b-avatar>
      Nofication System
    </b-list-group-item>
    <crud-table endpoint="/messages" :columns="[
        'selected',
        'subject',
        'message',
        'timesent',
        'status',
        'action'
      ]"
      :form-fields="{
        subject: '',
        message: '',
        timesent: new Date(),
        status: 'unread',
        important: false
      }"
    >
      <!-- your form input fields in this slot-->
      <template v-slot:input-fields="{ formdata }">
        <b-form-group id="input-group-1" label="Subject" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="formdata.subject"
            required
            placeholder="Enter Subject"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Message" label-for="input-2">
          <b-form-textarea
            id="input-2"
            v-model="formdata.message"
            size="sm"
            required
            placeholder="Enter Message"
          >
          </b-form-textarea>
        </b-form-group>
      </template>
    </crud-table>
  </div>
</template>

<script>
import CrudTable from "../components/crud-table";

export default {

  components: { CrudTable }
  
};
</script>

<style scoped></style>

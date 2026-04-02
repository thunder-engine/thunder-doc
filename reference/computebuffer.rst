.. _api_ComputeBuffer:

ComputeBuffer
=============

Inherited: None

.. _api_ComputeBuffer_description:

Description
-----------

The ComputeBuffer class provides functionality to manage and manipulate data buffers used in compute shaders. The count method retrieves the number of elements, stride gets and sets the stride of the buffer, and data gets the current data stored in the buffer. The setData method allows updating the buffer data and marks the buffer as dirty.



.. _api_ComputeBuffer_public:

Public Methods
--------------

+------------+---------------------------------------------------------------------+
|   uint32_t | :ref:`count<api_ComputeBuffer_fc2164d3>` () const                   |
+------------+---------------------------------------------------------------------+
|  ByteArray | :ref:`data<api_ComputeBuffer_0812d9cf>` () const                    |
+------------+---------------------------------------------------------------------+
|       void | :ref:`setData<api_ComputeBuffer_c2e6479b>` (const ByteArray & data) |
+------------+---------------------------------------------------------------------+
|       void | :ref:`setStride<api_ComputeBuffer_7ca3e4d9>` (uint32_t  stride)     |
+------------+---------------------------------------------------------------------+
|   uint32_t | :ref:`stride<api_ComputeBuffer_2d0837b4>` () const                  |
+------------+---------------------------------------------------------------------+



.. _api_ComputeBuffer_static:

Static Methods
--------------

None

.. _api_ComputeBuffer_methods:

Methods Description
-------------------

.. _api_ComputeBuffer_fc2164d3:

 uint32_t **ComputeBuffer::count** () const

Gets the number of elements in the compute buffer.

----

.. _api_ComputeBuffer_0812d9cf:

 ByteArray **ComputeBuffer::data** () const

Gets the data stored in the compute buffer.

**See also** setData().

----

.. _api_ComputeBuffer_c2e6479b:

 void **ComputeBuffer::setData** (ByteArray & *data*)

Sets the *data* of the compute buffer.


**Note:** This method updates the buffer *data* and marks it as dirty.


**See also** data().

----

.. _api_ComputeBuffer_7ca3e4d9:

 void **ComputeBuffer::setStride** (uint32_t  *stride*)

Sets the *stride* of the compute buffer.

**See also** stride().

----

.. _api_ComputeBuffer_2d0837b4:

 uint32_t **ComputeBuffer::stride** () const

Returns stride, representing the size of a single element in the buffer.

**See also** setStride().


